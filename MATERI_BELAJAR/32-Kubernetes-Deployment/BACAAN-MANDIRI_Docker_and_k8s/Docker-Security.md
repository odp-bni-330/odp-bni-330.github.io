# Docker Security

misconfigurations can reduce security levels or introduce new vulnerabilities.

## Rules

### RULE #0 - Keep Host and Docker up to date

containers share the host's kernel. If the host's kernel is vulnerable, the containers are also vulnerable.

- [[Leaky Vessels]]
- [[Dirty COW]]

### RULE #1 - Do not expose the Docker daemon socket (even to the containers)

`/var/run/docker.sock`

primary entry point for the Docker API.

Do not enable tcp Docker daemon socket by running docker daemon with `-H` `tcp://0.0.0.0:XXX` or similar you are exposing unencrypted and unauthenticated direct access to the Docker daemon.

secure the daemon either using the built in HTTPS encrypted socket, or by putting a secure web proxy in front of it.

You can listen on port 2375 on all network interfaces with -H tcp://0.0.0.0:2375, or on a particular network interface using its IP address: -H tcp://192.168.59.103:2375. It is conventional to use port 2375 for un-encrypted, and port 2376 for encrypted communication with the daemon.

Do not expose `/var/run/docker.sock` to other containers. If you are running your docker image with `-v` `/var/run/docker.sock://var/run/docker.sock`

```yaml
volumes:
  -"/var/run/docker.sock:/var/run/docker.sock"
```

### RULE #2 - Set a user

```bash
docker run -u 4000 alpine
```

```Dockerfile
FROM alpine
RUN groupadd -r myuser && useradd -r -g myuser myuser
#    <HERE DO WHAT YOU HAVE TO DO AS A ROOT USER LIKE INSTALLING PACKAGES ETC.>
USER myuser
```

Enable user namespace support (-`-userns-remap=default`) in Docker daemon

K8s:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
spec:
  containers:
    - name: example
      image: gcr.io/google-samples/node-hello:1.0
      securityContext:
        runAsUser: 4000 # <-- This is the pod user ID
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    supplementalGroups: [4000]
  volumes:
  - name: sec-ctx-vol
    emptyDir: {}
  containers:
  - name: sec-ctx-demo
    image: busybox:1.28
    command: [ "sh", "-c", "sleep 1h" ]
    volumeMounts:
    - name: sec-ctx-vol
      mountPath: /data/demo
    securityContext:
      allowPrivilegeEscalation: false

```

### RULE #3 - Limit capabilities (Grant only specific capabilities, needed by a container)

```bash
docker run --cap-drop all --cap-add CHOWN alpine
```

Do not run containers with the `--privileged` flag

K8s:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
spec:
  containers:
    - name: example
      image: gcr.io/google-samples/node-hello:1.0
      securityContext:
        capabilities:
          drop:
            - ALL
          add: ["CHOWN"]
```

### RULE #4 - Prevent in-container privilege escalation

Always run docker images with `--security-opt=no-new-privileges`

K8s:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
spec:
  containers:
    - name: example
      image: gcr.io/google-samples/node-hello:1.0
      securityContext:
        allowPrivilegeEscalation: false
```

### RULE #5 - Be mindful of Inter-Container Connectivity

Inter-Container Connectivity (icc) is enabled by default, allowing all containers to communicate with each other through the `docker0` bridged network.

creating custom Docker networks and specifying which containers should be attached to them. This method provides more granular control over container communication.

K8s : Network Policy

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: test-network-policy
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - ipBlock:
        cidr: 172.17.0.0/16
        except:
        - 172.17.1.0/24
    - namespaceSelector:
        matchLabels:
          project: myproject
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 6379
  egress:
  - to:
    - ipBlock:
        cidr: 10.0.0.0/24
    ports:
    - protocol: TCP
      port: 5978
```

### RULE #6 - Use Linux Security Module (seccomp, AppArmor, or SELinux)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: default-pod
  labels:
    app: default-pod
spec:
  securityContext:
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: test-container
    image: hashicorp/http-echo:1.0
    args:
    - "-text=just made some more syscalls!"
    securityContext:
      allowPrivilegeEscalation: false
```

### RULE #7 - Limit resources (memory, CPU, file descriptors, processes, restarts)

avoid DoS attacks

maximum number of restarts:
`--restart=on-failure:<number_of_restarts>`

maximum number of file descriptors:
`--ulimit nofile=<number>`

maximum number of processes:
`--ulimit nproc=<number>`

### RULE #8 - Set filesystem and volumes to read-only

```bash
docker run --read-only alpine sh -c 'echo "whatever" > /tmp'
```

Docker:

```yaml
version: "3"
services:
  alpine:
    image: alpine
    read_only: true
```

K8s:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
spec:
  containers:
    - name: example
      image: gcr.io/google-samples/node-hello:1.0
      securityContext:
        readOnlyRootFilesystem: true
```

Mount volume as read only (ro):

```bash
docker run -v volume-name:/path/in/container:ro alpine

# or

docker run --mount source=volume-name,destination=/path/in/container,readonly alpine
```

### RULE #9 - Integrate container scanning tools into your CI/CD pipeline

security linter. Some issues that are commonly checked are:

- Ensure a USER directive is specified
- Ensure the base image version is pinned
- Ensure the OS packages versions are pinned
- Avoid the use of ADD in favor of COPY
- Avoid curl bashing in RUN directives

Container scanning tools can detect known vulnerabilities, secrets and misconfigurations in container images and provide a report of the findings with recommendations on how to fix them.

popular container scanning tools are:

- Clair
- ThreatMapper
- Trivy
- Snyk (open source and free option available)
- Anchore (open source and free option available)
- Docker Scout (open source and free option available)
- JFrog XRay
- Qualys

To detect secrets in images:

- ggshield (open source and free option available)
- SecretScanner (open source)

To detect misconfigurations in Kubernetes:

- kubeaudit
- kubesec.io
- kube-bench

To detect misconfigurations in Docker:

- inspec.io
- dev-sec.io
- Docker Bench for Security

### RULE #10 - Keep the Docker daemon logging level at info

verify by checking the daemon configuration file `/etc/docker/daemon.json` for the `log-level` key. If the key is not present, the default logging level is `info`

```bash
ps aux | grep '[d]ockerd.*--log-level' | awk '{for(i=1;i<=NF;i++) if ($i ~ /--log-level/) print $i}'
```

Until and unless required, you should not run docker daemon at the 'debug' log level.

### Rule #11 - Run Docker in rootless mode

ensures that the Docker daemon and containers are running as an unprivileged user, which means that even if an attacker breaks out of the container, they will not have root privileges on the host.

Rootless mode executes the Docker daemon and containers inside a user namespace.

### RULE #12 - Utilize Docker Secrets for Sensitive Data Management

```bash
docker secret create my_secret /path/to/super-secret-data.txt

docker service create --name web --secret my_secret nginx:latest
```

```yaml
version: "3.8"
secrets:
  my_secret:
    file: ./super-secret-data.txt
services:
  web:
    image: nginx:latest
    secrets:
      - my_secret
```

this approach is not recommended for Kubernetes, where secrets are stored in plaintext by default. In Kubernetes, consider using additional security measures such as etcd encryption, or third-party tools.

### RULE #13 - Enhance Supply Chain Security

- **Image Provenance**: Document the origin and history of container images to ensure traceability and integrity.
- **SBOM Generation**: Create a Software Bill of Materials (SBOM) for each image, detailing all components, libraries, and dependencies for transparency and vulnerability management.
- **Image Signing**: Digitally sign images to verify their integrity and authenticity, establishing trust in their security.
- **Trusted Registry**: Store the documented, signed images with their SBOMs in a secure registry that enforces strict access controls and supports metadata management.
- **Secure Deployment**: Implement secure deployment polices, such as image validation, runtime security, and continuous monitoring, to ensure the security of the deployed images.
