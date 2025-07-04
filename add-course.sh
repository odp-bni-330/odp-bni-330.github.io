#!/bin/bash

# SHELL SCRIPTING utk menambahkan course

# Cek apakah file courses.json ada
if [ ! -f courses.json ]; then
    echo "[]">courses.json
fi

echo "Masukkan informasi course baru:"

read -p "Nomor hari (misal: 33): " number
read -p "Judul course (misal: Docker & Container): " title
read -p "Nama file gambar (misal: 33-docker.png): " image
read -p "Deskripsi gambar (alt text): " alt
read -p "Nama Folder Github Materi: " link

# Format JSON object
new_entry=$(jq -n \
  --arg day "D$number" \
  --arg title "$title" \
  --arg image "./assets/$image" \
  --arg alt "$alt" \
  --arg link "https://github.com/odp-bni-330/odp-bni-330.github.io/tree/main/MATERI_BELAJAR/$link" \
  '{day: $day, title: $title, image: $image, alt: $alt, link: $link}'
)

# Tambahkan ke courses.json
tmp_file=$(mktemp)
jq ". + [$new_entry]" courses.json > "$tmp_file" && mv "$tmp_file" courses.json

echo "✅ Course berhasil ditambahkan ke courses.json!"
