#!/bin/bash

apt update && apt install -y openssh-server sudo
useradd -m -s /bin/bash ubuntu
echo "ubuntu:ubuntu" | chpasswd
echo "ubuntu ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

######  APABILA MENGGUNAKAN RSA key u/ ssh #####
# mkdir -p /home/ubuntu/.ssh
# cp /root/.ssh/authorized_keys /home/ubuntu/.ssh/authorized_keys
# chown -R ubuntu:ubuntu /home/ubuntu/.ssh
# chmod 700 /home/ubuntu/.ssh
# chmod 600 /home/ubuntu/.ssh/authorized_keys
################################################

mkdir -p /var/run/sshd
/usr/sbin/sshd -D
