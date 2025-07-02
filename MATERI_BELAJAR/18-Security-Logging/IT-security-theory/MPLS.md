Multiprotocol label switching (MPLS) is a technique for speeding up network connections.
 The public Internet functions by forwarding [packets](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/) from one router to the next until the packets reach their destination. MLPS, on the other hand, sends packets along predetermined network paths. Ideally, the result is that routers spend less time deciding where to forward each packet, and packets take the same path every time.

MPLS is considered to operate at [OSI](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) layer "2.5", below the [network layer](https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/) (layer 3) and above the data link layer (layer 2).

## Cara Routing Bekerja (normally)

Anything sent from one computer to another over the Internet is divided up into smaller pieces called packets, instead of getting sent all at once. For example, this webpage was sent to your computer or device in a series of packets that your device reassembled and then displayed.

Before routers can forward a packet to its final IP address, they must first determine where the packet needs to go. Routers do this by referencing and maintaining a routing table,

In typical Internet routing, each individual router makes decisions independently based on its own internal routing table. Even if two packets come from the same place and are going to the same destination, they may take different network paths if a router updates its routing table after the first packet passes through. However, with MPLS, packets take the same path every time.

## Cara Routing MPLS

with MPLS, packets take the same path every time.

## When is MPLS used?

MPLS can be used when speed and reliability are highly important. Applications that require near-immediate data delivery are known as _real-time_ applications. Voice calls and video calls are two common examples of real-time applications.

drawback : **Lack of encryption:** MPLS is not encrypted; any attacker that intercepts packets on MPLS paths can read them in plaintext. Encryption has to be set up separately.
