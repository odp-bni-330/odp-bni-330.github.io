Bagus! Sekarang Keycloak-nya sudah berjalan. Error **"Invalid parameter: redirect\_uri"** artinya Keycloak **menolak URI callback** yang kamu berikan karena **tidak terdaftar** di konfigurasi client.

---

## 🧩 Kenapa error ini muncul?

Saat kamu mengakses URL:

```
http://localhost:8080/realms/demo/protocol/openid-connect/auth?client_id=postman-client&...&redirect_uri=http://localhost:5000/callback
```

Keycloak memeriksa apakah `redirect_uri` yang kamu minta (`http://localhost:5000/callback`) **cocok dengan daftar yang diizinkan** pada client `postman-client`.

---

## ✅ Cara Mengatasinya

### 1. **Masuk ke Keycloak Admin Console**

* URL: [http://localhost:8080/admin/](http://localhost:8080/admin/)
* Login pakai admin credentials (misal `admin` / `admin` jika pakai `start-dev`)

---

### 2. **Pilih Realm `demo`**

---

### 3. **Pilih Clients → `postman-client`**

---

### 4. **Scroll ke bagian "Valid Redirect URIs"**

Tambahkan:

```
http://localhost:5000/callback
```

> Jika mau lebih fleksibel, kamu bisa gunakan wildcard (tidak direkomendasikan untuk produksi):

```
http://localhost:5000/*
```

---

### 5. **Klik Save**

---

### 6. **Coba Ulangi Login dari Flask**

* Jalankan Flask kembali: `python app.py`
* Kunjungi: `http://localhost:5000/`
* Klik **Login with Keycloak**

---

## 💡 Tips Debug

Kalau error masih muncul:

* Pastikan tidak ada **spasi** di URL redirect
* Cek apakah client kamu **aktif** dan bertipe `confidential`
* Cek log Keycloak (jika perlu: `docker logs <container_id>` atau output terminal)

---

Kalau kamu ingin, saya bisa bantu juga membuat **script setup Keycloak otomatis** pakai command line (`kcadm.sh`) agar lebih cepat.

Mau lanjut uji coba login sekarang atau setup otomatis Keycloak-nya?

