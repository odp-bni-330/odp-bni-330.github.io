Secure web gateway

blocks or filters out dangerous content and prevents data leakage. All employee Internet traffic passes through the SWG.

operate in between company employees and the Internet.
 
 SWGs filter unsafe content from web traffic to [stop cyber threats](https://www.cloudflare.com/products/zero-trust/threat-defense/) and [data breaches](https://www.cloudflare.com/learning/security/what-is-a-data-breach/). They also block risky or unauthorized user behavior.

All SWG products contain these technologies:

- [URL filtering](https://www.cloudflare.com/learning/access-management/what-is-url-filtering/)
- Anti-malware detection and blocking
- Application control
may also include [data loss prevention (DLP)](https://www.cloudflare.com/learning/access-management/what-is-dlp/), content filtering, and other Internet [traffic filters](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/).


## How does a secure web gateway work?

Some SWGs ==run on [proxy servers](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)==. A proxy server represents another device on the Internet. It makes requests and receives responses on behalf of a client device (e.g. a user's laptop) or another server.

Other SWGs are ==software only==; software-based gateways can run either on a company's premises or in the cloud as a [SaaS](https://www.cloudflare.com/learning/cloud/what-is-saas/) application.

some SWGs are deployed as on-premise appliances: ==physical hardware== devices that plug into a company's IT infrastructure.

 SWGs can run anywhere, they are especially helpful for managing remote employees


## ==URL Filtering==
URL filtering typically involves the use of a blocklist: a list of known bad websites that are not allowed. If a user attempts to load a website that is on the blocklist, the SWG blocks the request and the website does not load on the user's device.

## Anti-malware scanning

SWGs scan network traffic for malware, meaning they examine the data passing through and see if it matches up with code from known malware.

Many SWGs can decrypt HTTPS traffic in order to scan the traffic for malware. After inspection, the gateway re-encrypts the traffic and forwards it to the user or the web server. ==([HTTPS Inspection](https://www.cloudflare.com/learning/security/what-is-https-inspection/))==

SWGs can detect which applications employees are using. Based on that, they can control what resources different applications can access or block certain applications altogether.

Other SWG capabilities include:

- **==Content filtering==:** This feature detects certain kinds of content and blocks that content.
- **==Data loss prevention (DLP)==:** This feature is not offered by all web security gateways, but it can be highly effective for preventing breaches.

Cloudflare Gateway uses ==[DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/)== to block malicious content, gives administrators complete visibility of network traffic, and protects users from malicious online code with [browser isolation](https://www.cloudflare.com/learning/access-management/what-is-browser-isolation/).