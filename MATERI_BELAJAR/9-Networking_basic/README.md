# Networking

## Repeater
- secara fisik sama dengan _switch_
- selalu broadcast
- sekarang dipakai hanya untuk _troubleshooting_

![PC-hub-connections](./img/PC-hub-connections.png)

Zaman dulu:
![hub-connections](./img/hub-connections.png)


## OSI Layer
- Application → ranah developer → HTTP
- Presentation 
- Session
- Transport     → ranah network engineer
- Network
- Data Link         → MAC
- Physical

## LAN Addressing
- MAC
- Ethernet address
- Burned-in address
- Unicast address
- Broadcast address
- multicast address

dalam 1 network, tiap device memiliki IP yang berbeda.


## IP Subnetting
![IP-subnetting](./img/IP-subnetting.png)

`127.0.0.0 - 127.255.255.255` → localhost (diri sendiri)

### Private IP
`A` : `1.0.0/18` - `10.255.255.255` 
`B` : `172.16.0/` - `172.31.255.255`
`C` : `192.168.0.0` - `192.168.0.255`

Beli IP untuk _hosting_ sendiri → melalui ISP supaya seluruh dunia bisa akses komputer kita.

## Broadcast address, Jumlah Host, dan Subnet-mask

contoh:
`10.0.0.0/8`
- Network address : `10.0.0.0`
- subnet mask : `/8` (model prefix)
    - dalam model segmen:
    `11111111.00000000.00000000.00000000` → `255.0.0.0`

- jumlah host:`00000000.11111111.11111111.11111111` → $$256 * 256 * 256 = 2^{24}$$
- broadcast address: 
    network address + subnetmask
    `10.0.0.0` + `0.255.255.255` = `10.255.255.255`

alternatif:
gunakan tools **Subnet mask calculator**

# Cisco Packet Tracer
→ Untuk simulasi

download di : [https://www.netacad.com/dashboard](netacad)

![CISCO-packet-tracer](./img/CISCO-packet-tracer.png)