# Catatan Tambahan

## Lihat process yang memakan port tertentu dan kill

```bash
# lihat process dengan port 6379
sudo lsof -i :6379

# kill process
sudo kill 16257

# Jika terus berjalan, maka perlu di-stop di systemctl
# cek status
systemctl status redis
# force stop
sudo systemctl stop redis
# agar di kemudian hari tidak auto-start lagi
sudo systemctl disable redis
```

## Referensi Tambahan

- [Contoh data enginering project](https://medium.com/@dogukannulu/data-engineering-end-to-end-project-1-7a7be2a3671)
