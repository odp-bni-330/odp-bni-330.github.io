IT security model that requires strict identity verification for every person and device trying to access resources on a private network, regardless of whether they are sitting within or outside of the network perimeter.

IT security model that assumes ==threats are present both inside and outside a network==

Traditional IT network security is based on the [castle-and-moat](https://www.cloudflare.com/learning/access-management/castle-and-moat-network-security/) concept. In castle-and-moat security, it is hard to obtain access from outside the network, but everyone inside the network is trusted by default. The problem with this approach is that once an attacker gains access to the network, they have free rein over everything inside.

![[castle-and-moat.png]]
## Prinsip
1. Continuous monitoring and validation
	-  philosophy behind a Zero Trust network assumes that there are attackers both within and outside of the network
2. Least Privilege
	- giving users only as much access as they need to minimize each user’s exposure to sensitive parts of the network.
3. Device access control
	-  strict controls on device access
4. Microsegmentation
	- breaking up security perimeters into small zones to maintain separate access for separate parts of the network.
5. Preventing lateral movement
	-  when an attacker moves within a network after gaining access to that network
6. Multi-factor authentication (MFA)
	- requiring more than one piece of evidence to authenticate a user;


[[ZTNA]] : main technology that enables organizations to implement zero trust security.
