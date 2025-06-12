FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    snort \
    iproute2 \
    iputils-ping \
    vim \
    tcpdump \
    wget \
    && apt-get clean

# Buat direktori konfigurasi
RUN mkdir -p /etc/snort/rules

# Tambahkan rule dummy
RUN echo 'alert icmp any any -> any any (msg:"ICMP Packet Detected"; sid:1000001; rev:1;)' > /etc/snort/rules/local.rules

# Konfigurasi snort.conf minimal
# RUN echo 'include /etc/snort/rules/local.rules' > /etc/snort/snort.conf
RUN echo "\
preprocessor stream5_global: track_tcp yes, track_udp yes\n\
preprocessor stream5_tcp: policy linux\n\
preprocessor http_inspect: global\n\
preprocessor http_inspect_server: server default profile all ports { 80 8080 3128 }\n\
include /etc/snort/rules/local.rules\
" > /etc/snort/snort.conf



CMD ["snort", "-i", "eth0", "-A", "console", "-c", "/etc/snort/snort.conf", "-K", "none"]

