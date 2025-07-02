menggabungkan arsitektur public cloud dengan on-premise.


 An organization may use their private cloud for some services and their public cloud for others, or they may use the public cloud as backup for their private cloud. They can also use the public cloud to handle periods of high demand, while keeping most operations within their private cloud.

- **Public cloud**: A public cloud is a cloud service run by an external vendor that may include servers in one or multiple data centers. Public clouds are shared by multiple organizations. Using virtual machines, individual servers may be shared by different companies, a situation that is called "multitenancy" because multiple companies are renting server space within the same physical server.
- **On-premise private cloud**: A private cloud is a data center wholly dedicated to one company. The servers in a private cloud aren't shared by anyone else's software, files, or data. On-premise private clouds are maintained and secured by the organizations themselves, not an external vendor.
- **Hosted private cloud**: This is just like an on-premise private cloud in that the servers are dedicated wholly to one organization. However, the cloud servers in a hosted private cloud are not located in an organization's offices – rather, a third-party provider hosts and maintains the cloud servers in one or more remote data centers, and the organization accesses the cloud over the Internet instead of an internal network. But unlike a public cloud, there is no multitenancy; the cloud servers are not shared with other organizations.
- **On-premise (legacy)**: On-premise or legacy deployments don't use cloud technology at all. Instead, organizations using this model follow the classic practice of purchasing software licenses, installing and maintaining hardware on their premises, and installing software locally on employee computers. In other words, instead of working in Google Docs (for example), employees would use Microsoft Word, or some other program installed and running on their computers.

![multicloud vs hybrid cloud](https://cf-assets.www.cloudflare.com/slt3lc6tev37/2FUanuH7qCS1oycfYY4IMn/6b790f0e98674ce50c37cf8909d8a4b2/multicloud-vs-hybrid-cloud.svg)

For a hybrid cloud to work well, the connection between the separate clouds is key. Public clouds, private clouds, and on-premises infrastructure can connect to each other in a variety of ways, including:

- [APIs](https://www.cloudflare.com/learning/security/api/what-is-an-api/) (Application Programming Interfaces)
- [VPNs](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/) (Virtual Private Networks)
- [WANs](https://www.cloudflare.com/learning/network-layer/what-is-a-wan/) (Wide Area Networks)

### Advantages of Using Cloud Infras.

- fleksibel
- meet spikes in demand
- keep data sensitive on premise

Cara Cloudflare integrasi dgn Hybrid Cloud development

![[Cloudflare global network.png]]
## References
[What is a hybrid cloud deployment model? | Cloudflare | Cloudflare](https://www.cloudflare.com/learning/cloud/what-is-hybrid-cloud/)