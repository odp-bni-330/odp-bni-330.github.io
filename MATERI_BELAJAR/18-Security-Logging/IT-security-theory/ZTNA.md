ZTNA uses "unlisted" [IP addresses](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/), applications, and services. It sets up one-to-one connections between users and the resources they need, like when two people who need to contact each other exchange phone numbers. But unlike two people exchanging numbers, ZTNA connections need to be re-verified and recreated periodically.

## ZTNA vs VPN
[Virtual private networks (VPNs)](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/) are what many organizations use to [control access](https://www.cloudflare.com/learning/access-management/what-is-access-control/) instead of ZTNA. Once users are logged in to a VPN, they gain access to the entire network and all the resources on that network (this is often called the [castle-and-moat model](https://www.cloudflare.com/learning/access-management/castle-and-moat-network-security/)). ==ZTNA instead only grants access to the specific application requested and denies access to applications and data by default.==

1. OSI model layer : ZTNA --> layer 7 (aplikasi) ; VPN --> layer 3 (network ) : IPSec protocol
2. **Hidden IP addresses** :  ZTNA does not expose IP addresses to the network.
3. **No MPLS:** ZTNA uses encrypted Internet connections over TLS instead of [MPLS](https://www.cloudflare.com/learning/network-layer/what-is-mpls/)-based [WAN](https://www.cloudflare.com/learning/network-layer/what-is-a-wan/) connections.
4. **IdP and SSO:** Most ZTNA solutions integrate with separate [identity providers (IdPs)](https://www.cloudflare.com/learning/access-management/what-is-an-identity-provider/), [single sign-on (SSO)](https://www.cloudflare.com/learning/access-management/what-is-sso/) platforms
