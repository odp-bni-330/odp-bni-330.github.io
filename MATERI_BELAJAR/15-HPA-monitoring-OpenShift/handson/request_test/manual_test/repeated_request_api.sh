#!/bin/bash

# Jumlah request yang ingin dilakukan
REQUEST_COUNT=5

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

echo "Memulai simulasi repeated request sebanyak $REQUEST_COUNT kali"

for ((i=1; i<=$REQUEST_COUNT; i++))
do
    echo -e "\nRequest ke-$i:"
    
    # Eksekusi curl command dan simpan output ke variable
    response=$(curl --location "$API_URL" \
        --header "${HEADERS[0]}" \
        --header "${HEADERS[1]}" \
        --data "$DATA" \
        --silent \
        --write-out "\nHTTP Status: %{http_code}\n")
    
    # Tampilkan response
    echo "$response"
    
    # Tunggu 1 detik antara request untuk menghindari rate limiting
    sleep 0
done

echo -e "\nSimulasi selesai"
