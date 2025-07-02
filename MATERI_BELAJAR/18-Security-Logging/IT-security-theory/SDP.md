 A software-defined perimeter (SDP) is a ==network boundary== that is based on software, not hardware.
 
 way to hide Internet-connected infrastructure (servers, routers, etc.) so that external parties and attackers cannot see it, whether it is hosted on-premise or in the cloud.

goal of the SDP approach is to base the [[network perimeter]] on software instead of hardware.

software-defined perimeter forms a virtual boundary around company assets at the ==network layer==, not the application layer.


## How to gain Access over SDP
- **User identity verification**
	- IdP
	- SSO
- **SDP controller approval:** The SDP "controller" is the logical component of the SDP that is responsible for determining which devices and servers should be allowed to connect
-  The SDP gateway opens the virtual "gate" to allow the user through. It establishes a secure network connection with the user device on one side of the gateway, and on the other side it establishes a network connection with the services that the user has access to

### SDP vs VPN

SDPs are very different from VPNs. In some ways, they are more secure: while VPNs enable all connected users to access the entire network, SDPs do not share network connections. SDPs may also be easier to manage than VPNs, especially if internal users need multiple levels of access.

Managing several different levels of network access using VPNs involves deploying multiple VPNs.

SDPs, on the other hand, are much more granular. There is no overall VPN that everyone who accesses the same resources logs in to; instead, a separate network connection is established for each user. It is almost as if everyone has their own private VPN. In addition, SDPs verify devices as well as users, making it much more difficult for an attacker to breach the system with stolen credentials alone.

SDPs are ==location- and infrastructure-agnostic.== Because they are based on software rather than hardware, SDPs can be deployed anywhere to protect on-premise infrastructure, cloud infrastructure, or both

SDP is one way to implement [[Zero Trust]] security.
