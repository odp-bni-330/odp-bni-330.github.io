#!/bin/bash

# URL API endpoint
API_URL="http://demo-openshift-hybrid-cloud-bostang-dev.apps.rm1.0a51.p1.openshiftapps.com/api/auth/login"

# Header dan data untuk request
HEADERS=(
    "Content-Type: application/json"
    "Cookie: dd9a1767ea5d7593ee22ba045d41660d=d739fcc2b9673190c403d66b69cf9ee0"
)
DATA='{
    "username": "bpjs",
    "password": "password123"
}'

# Counter untuk menghitung jumlah request
COUNTER=1

echo "Memulai infinite request loop (Tekan Ctrl+C untuk berhenti)"
echo "-----------------------------------------------------"

# Trap Ctrl+C untuk menampilkan total request sebelum exit
trap ctrl_c INT

function ctrl_c() {
    echo -e "\n\nDihentikan oleh user"
    echo "Total request yang dilakukan: $((COUNTER-1))"
    exit 0
}

while true
do
    echo -n "Request #$COUNTER - "
    
    # Eksekusi curl command dengan timeout 10 detik
    curl --location "$API_URL" \
        --max-time 10 \
        --header "${HEADERS[0]}" \
        --header "${HEADERS[1]}" \
        --data "$DATA" \
        --silent \
        --write-out "Status: %{http_code}, Time: %{time_total}s\n"
    
    COUNTER=$((COUNTER+1))
done
