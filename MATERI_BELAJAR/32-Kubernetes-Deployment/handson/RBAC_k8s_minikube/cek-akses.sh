#!/bin/bash

# Warna simbol
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"  # No Color

# Input dari user
read -p "Masukkan namespace: " NAMESPACE
read -p "Masukkan nama service account (tanpa prefix): " SA_NAME

SERVICE_ACCOUNT="system:serviceaccount:${NAMESPACE}:${SA_NAME}"

# Daftar verb dan resource
VERBS=("get" "list" "watch" "create" "delete")
RESOURCES=("pods" "services" "deployments" "configmaps" "secrets" "ingresses" "jobs" "cronjobs")

# Header
echo ""
echo "Menguji akses untuk ServiceAccount: ${SERVICE_ACCOUNT}"
printf "%-10s %-15s %-7s\n" "VERB" "RESOURCE" "ACCESS"
echo "------------------------------------------"

# Loop kombinasi verb + resource
for verb in "${VERBS[@]}"; do
  for res in "${RESOURCES[@]}"; do
    access=$(minikube kubectl -- auth can-i $verb $res --as=$SERVICE_ACCOUNT -n $NAMESPACE)
    if [[ "$access" == "yes" ]]; then
      symbol="${GREEN}✔${NC}"
    else
      symbol="${RED}✖${NC}"
    fi
    printf "%-10s %-15s $symbol\n" "$verb" "$res"
  done
done
