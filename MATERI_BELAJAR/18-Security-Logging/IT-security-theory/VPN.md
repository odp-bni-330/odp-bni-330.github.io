A virtual private network (VPN) is an ==encrypted connection== between two or more computers. VPN connections take place over public networks, but the data exchanged over the VPN is still private because it is encrypted.

VPNs make it possible to securely access and exchange confidential data over shared network infrastructure, such as the public Internet. For instance, when employees are [working remotely](https://www.cloudflare.com/learning/access-management/remote-workforce-security/) instead of in the office, they often use VPNs to access corporate files and applications.

Many VPNs use the ==IPsec protocol== suite to establish and run these encrypted connections. However, not all VPNs use [[IPsec]]. Another protocol for VPNs is [SSL](https://www.cloudflare.com/learning/ssl/what-is-ssl/)/[TLS](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/), which operates at a different layer in the [OSI model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) than IPsec.

IPsec connections include the following steps:
- **Key exchange**
- **Packet headers and trailers**
	-  IPsec adds several headers to data packets containing authentication and encryption information
- **Authentication**
- **Encryption**
- **Transmission**
