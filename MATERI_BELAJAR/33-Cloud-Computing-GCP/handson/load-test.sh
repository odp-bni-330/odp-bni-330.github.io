#! /bin/bash

# Penggunaan: ./load-test.sh <URL> <THREAD> <ATTEMPT>

URL=$1
THREAD=$2
ATTEMPT=$3

if [ -z "$URL" ] || [ -z "$THREAD" ] || [ -z "$ATTEMPT" ]; then
    echo "Penggunaan: $0 <URL> <THREAD> <ATTEMPT>"
    echo "Contoh: $0 http://contoh.com 5 100"
    exit 1
fi

# Fungsi untuk melakukan serangan GET
load(){
    for((i=1;i<=$ATTEMPT;i++)); do
        curl -s "$URL"
        #curl -s "$URL" > /dev/null
        #echo "Thread $1 - Attempt $i selesai"
    done
}

# Eksekusi multithread
for((j=1;j<=$THREAD;j++)); do
    load "$j" &  # Jadikan proses background
done

wait  # Tunggu sampai semua thread selesai

echo "Serangan selesai!"

