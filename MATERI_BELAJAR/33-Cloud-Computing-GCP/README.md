# Cloud Infrastructure

## Introduction to Cloud Computing

**Definisi**:

model penyedia layanan komputasi :
    - server
    - storage
    - DB
    - network
    - software
melalui internet (cloud) -> pengguna bisa akses scr fleksible, scalable, sesuai kebutuhan tanpa harus punya infras fisik.

alternatif yg lama : on-premise / inhouse

**Manfaat Cloud Computing**:

- skalabilitas
  - tambah/kurangi resources on demand
- biaya efisien
  - pay as yo go
- aksesibilitas global
  - aksesibel as long as kehubung ke internet
- reliabilitas
  - uptime tinggi & backup otomatis
- keamanan
  - standard keamanan tinggi & regulatory compliance

**Jenis Cloud Computing**:

- Public Cloud
  - dipakai bnyk pelanggan
- Private Cloud
  - khusus utk 1 organisasi
- Hybrid Cloud

**Karakteristik cloud computing**:

- on-demand self-service
  - resources dpt dipakai kapan saja tanpa interaksi manusia dgn provider
- broad network access
  - akses via internet
- resource pooling
  - multi-tenant
- rapid elasticity
  - kapasitas dapat diubah sesuai kebutuhan
- measured service
  - penggunaan resources dimonitor & dihitung

**Tantangan dalam Cloud Computing**:

- Keamanan & privasi data
  - data disimpan di pihak ketiga -> rentan peretasan & penyalahgunaan akses
- ketergantungan pada koneksi internet
  - akses via internet yg stabil (bad connection = gangguan layanan)
- Vendor lock-in
  - sulit pindah dari 1 cloud provider ke yg lain karena beda (platform, API, format data, biaya migrasi)
- Manajemen Biaya & Penggunaan
  - cloud yg fleksibel justru bisa sebabkan pemborosan jika tdk terkontrol
- Kepatuhan Regulasi
  - tiap negara/industri beda-beda

Cloud computing servicem Models:

![cloud-computing-service-models](./img/cloud-computing-service-models.png)

contoh service models:

![common-instances-of-cloud-service-models](./img/common-instances-of-cloud-service-models.png)

> - AWS Lambda -> serverless (FaaS : function as a service)
> - FaaS is a serverless backend service allowing developers to write modular pieces of code on the fly that can be executed in response to certain events.
> - it allows customers to run code in response to events, without managing the complex infrastructure typically associated with building and launching microservices applications.
> - FaaS is actually a subset of serverless. Serverless is focused on any service category, be it compute, storage, database, messaging and api gateways where configuration, management and billing of servers are invisible to the user.
> - faaS focus on the event-driven computing paradigm where in application code or containers only run in response to events or requests.
> ...........................................................................................................
> XaaS : anything as a service
>
> Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app.
> Firebase -> PaaS

### IaaS

**Komponen**:

- Compute (VM/Instance)
  - VM u/ jalankan app & services
  - contoh: KVM (Kernel-based virtual machine for linux)
- Storage
  - penyimpanan objek, blok, file
  - contoh: Amazon S3, Google Cloud Storage
- Network
  - Virtual network, IP address, firewall, load balancer
- OS & Middleware

> Middleware is a software layer that connects the operating system to applications, data, and users. It provides common services and capabilities.

**kelebihan**:

- tdk perlu investasi hardware
- skalabilitas tinggi & fleksibel
- cepat u/ testing & development
- bisa otomasi & diatur dgn script/API -> Terraform
- dukung sistem legacy

**kekurangan**:

- tanggungjawab thd konfig & keamanan OS
- biaya bengkak apabila tdk dikelola dgn baik
- butuh pengetahuan teknis u/ kelola infras

**Contoh layanan IaaS**:

| **Penyedia**    | **Layanan IaaS**            |
| :-------------- | :-------------------------- |
| Amazon          | EC2 (Elastic Compute Cloud) |
| Google          | Compute Engine              |
| Microsoft Azure | Azure Virtual Machines      |
| DigitalOcean    | Droplets                    |
| Alibaba Cloud   | Elastic Compute Service     |

### PaaS

dev cukup fokus pada kode & logika bisnis ; cloud provider tangani infras.

**Kompone**n:

- Runtime environment
  - platform u/ jalankan app
  - ex : Node.js, Java, Python
- Database services
  - ex: PostgreSQL, MySQL, MongoDB
- App Hosting
  - environment u/ deploy app scr otomatis
- Dev tools
  - alat bantu CI/CD, IDE online, debugger, monitoring tools
- Middleware
  - komponen penengah (API gateway, messege queue, etc.)

**Ciri Khas**:

- tdk perlu fokus ke OS & HW
- user fokus ke dev app
- skalabilitas
- berbasis web interface / CLI

**Kelebihan**:

- hemat waktu u/ dev
- deployment & scaling otomatis
- biaya lebih rendah u/ dev
- cocok u/ prototyping & MVP
- tersedia banyak services tambahan (caching, auth, API mngmt)

**Kekurangan**:

- fleksibilitas dev kurang
- terbatas pada bahasa / framework tertentu
- vendor lock-in (ketergantungan)
- sulit migrasi ke sistem lain

use case penggunaan:

- startup aplikasi MVP dgn `Heroku` & `PostgreSQL` tanpa pikirkan infras
- enterprise dgn Google App Engine u/ jalankan microservices tanpa provisioning server
- perusahaan layanan managed service

contoh PaaS:

- [Firebase](https://firebase.google.com/)
- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

![monolithic-architecture-bank](./img/monolithic-architecture-bank.png)

![microservices-architecture-bank](./img/microservices-architecture-bank.png)

![more-complete-microservice-architecture](./img/more-complete-microservice-architecture.png)

> 1 Springboot app : 1 Service, biasanya terdiri dari:
>
> - Controller
> - Service
> - Repository
> - Model

**Contoh API Gateway**:

- Free:
  - [Zuul](https://github.com/Netflix/zuul)
  - [Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway)
  - [KrakenD](https://www.krakend.io/?gad_source=1&gad_campaignid=20256404369&gclid=Cj0KCQjw1JjDBhDjARIsABlM2Su3ok0tA5ErjluUD4hkER4VEbl8Kne-EOUsCcIddbck-EoqN-LojFAaAhTuEALw_wcB)
  - [TYK](https://tyk.io/)
  - [APISIX](https://apisix.apache.org/)
- Paid:
  - [KONG](https://konghq.com/products/kong-gateway)
  - [TYK](https://tyk.io/)
  - [GCP-Gateway](https://cloud.google.com/api-gateway/docs)

![Apache-APISIX](./img/Apache-APISIX.png)

![features-of-Apache-APISIX](./img/features-of-Apache-APISIX.png)

### SaaS

**Komponen**:

- app berbasis web
- manajemen pengguna & akses
- layanan berlangganan
- monitoring & analytics
- integrasi API

- Produktivitas
  - contoh: Google Workspace, Microsoft 365
- Komunikasi
  - contoh: Zoom, Slack
- CRM
  - contoh: Salesforce, Zoho CRM
- ERP
  - contoh: SAP Business ByDesign, Odoo
- Akutansi
  - contoh: Xero, FreshBooks
- Desain
  - contoh: Figma, Canva

## Cloud Provider

perusahaan/organisasi yg sediakan layanan komputasi berbasis cloud :
    - server virtual
    - penyimpanan data
    - DB
    - network
    - keamanan
    - layanan AI

## Deploying Containers in Cloud

### GCP

Fitur:

- Compute
  - Compute Engine, GKE (kubernetes engine)
- Storage
  - cloud Storage, Filestore, PersistentDisk
- Networking
  - Load balancer global, VPC, Cloud CDN
- DB
  - Cloud SQL, Firestore, BigQuery, Cloud Spanner
- AI&ML
  - Vertex AI, AutoML, TensorFlow
- Security & IAM
  - Cloud Identity, IAM, KMS, VPC Service control
- Monitoring
  - Cloud Logging, Cloud Monitoring (Stackdriver)
- Serverless
  - Cloud Functions, Cloud Run, App Engine

> NAS (Network Attached Storage)
> -> hard drive or group of hard drives that connect to your network and make your files accessible to more than a single device.

![network-attached-storage](./img/network-attached-storage.png)

#### Region & Zone

- Region: lokasi geografis besar tempat infras
  - contoh: (`asia-southeast2` = jakarta)
- Zone: sub-divisi dari region (ada 2 - 4 zone / region)
  - u/ redundansi & high availability (HA)
  - contoh: `asia-southeast2-a`

![region-zone-gcp](./img/region-zone-gcp.png)

> High availability (HA) refers to a system's ability to remain operational and accessible with minimal or no downtime, often measured by its uptime percentage.
> SLA up time : >98%
> A Service Level Agreement (SLA) is a documented agreement between a service provider and a customer (either internal or external) that outlines the level of service to be provided

Multiple Region u/ high availability (cluster-wide):

![multiple-region-for-high-availability](./img/multiple-region-for-high-availability.png)

Tips Memilih Region:

- pilih yg paling dekat -> kurangi latensi
- kepatuhan data lokal (misal harus di dalam IND)
- harga
- redundansi antar zone

#### GCP CloudRun

serverless milik GCP u/ jalankan container tanpa perlu kelola server.

cukup modal Docker Image, bisa langsung jalan.

karakteristik:

- container berbasis HTTP (REST API)
- Full-managed (tdk perlu urus server, VM, k8s)
- stateless, autoscale hingga 0
- bisa deploy dari Docker Image, Github
- custom domain

Skema billing: _pay-as-you-go_
faktor:

- CPU
  - #vCPU
  - durasi CPU aktif
- memori
  - ukuran (MB/GB)
  - waktu pemakaian
- #request
  - /1jt
- durasi eksekusi
  - dari request masuk sampai respons selesai (/detik)
- data out (egress)
  - /GB

kekurangan:

- stateless
- cold start
- tdk cocok u/ aplikasi long-running (misal: websocke, cronheavy)

### (HANDSON) Deploy Container App @CloudRun

di GCP dan bisa akses dari public.

deploy app di wrap dlm docker image lalu push ke Dockerhub

app berbasis:

- Java SpringBoot
- Go

![tampilan-dashboard-GCP](./img/tampilan-dashboard-GCP.png)

Pilih service `CloudRun`

#### LANGKAH HANDSON

**Langkah 0** : Setup GCP Service dan Buat test deployment

![cloud-run-dashboard](./img/cloud-run-dashboard.png)

![deploy-container-hello](./img/deploy-container-hello.png)

![select-container-image-from-artifact-registry](./img/select-container-image-from-artifact-registry.png)

![tampilan-cloud-run](./img/tampilan-cloud-run.png)

![tampilan-cloud-run-detail](./img/tampilan-cloud-run-detail.png)

![cloud-run-sukses-run](./img/cloud-run-sukses-run.png)

**Langkah 1** : Deploy container [`caddy:alpine`](https://hub.docker.com/_/caddy/tags?name=alpine)

matikan IAM

![deploy-container-cady-alpine](./img/deploy-container-cady-alpine.png)

ubah container port jadi `80` dan turunkan memory jadi `128MiB`

![pengaturan-port-caddy-alpine](./img/pengaturan-port-caddy-alpine.png)

tampilan container `caddy-alpine` sukses:

![tampilan-caddy-alpine-works](./img/tampilan-caddy-alpine-works.png)

**Langkah 2** : Lakukan yang sama untuk nginx

matikan IAM

![deploy-nginx-alpine](./img/deploy-nginx-alpine.png)

ubah container port jadi `80` dan turunkan memory jadi `128MiB`

![pengaturan-port-nginx-alpine](./img/pengaturan-port-nginx-alpine.png)

tampilan container `nginx-alpine` sukses:

![tampilan-nginx-alpine-works](./img/tampilan-nginx-alpine-works.png)

**Langkah 3** : Lakukan yang sama untuk httpd

matikan IAM

![deploy-httpd-alpine](./img/deploy-httpd-alpine.png)

ubah container port jadi `80` dan turunkan memory jadi `128MiB`

![pengaturan-port-httpd-alpine](./img/pengaturan-port-httpd-alpine.png)

tampilan container `httpd-alpine` sukses:

![tampilan-httpd-alpine-works](./img/tampilan-httpd-alpine-works.png)

### (HANDSON) Deploy SpringBoot App @CloudRun

apabila menggunakan Memory 128MiB :

![error-check-log](./img/error-check-log.png)

coba naikkan Memory menjadi 256MiB:

![deploy-sukses-setelah-memory-dinaikkan](./img/deploy-sukses-setelah-memory-dinaikkan.png)

![tampilan-springboot-app-works](./img/tampilan-springboot-app-works.png)

---

Extras (FOR FUN): load testing

![load-testing](./img/load-testing.png)

![resquest-count](./img/resquest-count.png)
