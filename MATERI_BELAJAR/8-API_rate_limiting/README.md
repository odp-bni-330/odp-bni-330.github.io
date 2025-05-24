<!-- Dirangkum oleh : Bostang Palaguna -->
<!-- Mei 2025 -->
# API Rate Limiting
## Autentikasi & Otorisasi
### JSON Web Token (JWT)
jenis token yang paling umum
analogi ➡️"id card" untuk akses

Metode autentikasi:
- Basic Auth
- Bearer Token
- JWT Beraer
- AWS Signature
- API Key
- Digest Bearer
- ...

#### Struktur JWT
```
Header.Payload.Signature
```

![jwt-example](./img/jwt-example.png)

- **Header**
➡️algoritma enkripsi apa yang dipakai

contoh:
```json
{"alg":"HS256", "typ":"JWT"}
```

- **Payload**
➡️yang menjadi konten/"_access card_"
➡️tidak terkait dengan API.
➡️jangan simpan informasi sensitif di JWT.

- `iss` - address/name of auth center
- `sub` - user id
- `aud` - client name
- `exp` - expiration
- `nbf` - time from
- `iat` - time of token creation
- `jti` - token id

- **Signature**
_formula_:
```
HMACSHA256(
    base64UrlEncode(header) + "." +base64UrlEncode(payload) , 
    secret
)
```
_secret_ = _salt_ ➡️ yang harus dijaga kerahasiaannya

contoh:
```json
{"sub":"1234567890","name":"John Doe", "admin":true}
```


**Mengirimkan data lewat REST API**:
1. pada body
➡️menggunakan anotasi `@RequestBody` pada Springboot
```json
{
    "title":"sebuah judul",
    "description" : "sebuah deskripsi"
}
```

2. query parameter
➡️bersamaan dengan URLnya
➡️menggunakan anotasi `@PathVariable` pada Springboot
```json
https://www.tiket.com/to-do/search?title=bali
```

# (Hands-on) JWT dengan Spring Boot

**Deskripsi**: sebuah aplikasi berbasis Java menggunakan framework `SpringBoot` untuk demonstrasi penggunaan SonarQube.

**Kasus** :
akan maintain kode _existing_ dengan menambahkan fitur _login_.

## Cara Menjalankan

1. Melakukan instalasi
dijalankan pertama kali untuk download library
```bash
./mvnw clean install
```

_compile_ tanpa melakukan _unit test_ sehingga lebih cepat.
```bash
./mvnw compile
```

2. Jalankan program
```bash
./mvnw spring-boot:run
```

3. Kirim / Test API lewat `postman`

3.1 Generate token
![generate-token](./img/generate-token.png)

3.2 Validasi token
seharusnya caranya adalah dengan menaruh sebagai _query parameter_
![validasi-token-seharusnya](./img/validasi-token-seharusnya.png)

namun untuk kesederhanaan demo, _token_ ditaruh di _body_.
![validasi-token-saat-ini](./img/validasi-token-saat-ini.png)

4. Maintain kode menggunakan SonarQube

![maintain-kode-dengan-sonarQube](./img/maintain-kode-dengan-sonarQube.png)

5. verifikasi di jwt io:
![cek-di-jwt-io](./img/cek-di-jwt-io.png)


6. Melakukan Integrasi SonarQube dengan `Github action`:
![analysis-method](./img/analysis-method.png)


## Cara _store credential_ di tempat yang tepat
➡️Github

`sonar token` ➡️ untuk akses sonarQube.

Github selain menjadi repository juga sebagai secret manager.

langkah : 
1. `Administration > Analysis Method > Analyse with Github Action`

![sonar-cloud-Github-Analyze](./img/sonar-cloud-Github-Analyze.png)

2. simpan `sonar token` sebagai `secret` di Github :
pilih **New Repository secret**
![github-setting-secret](./img/github-setting-secret.png)


3. atur `project key` dan `organization key` di `.github/workflows/build.yml` sesuai yang tertera di SonarQube

![github-storing-secret](./img/github-storing-secret.png)

![information-project-key](./img/information-project-key.png)

4. tambahkan `<properties>` yang ada di SonarQube di `pom.xml` 


**catatan**:
Jangan lupa untuk meng-**_disable_** `dependency graph` pada pengaturan github agar setelah `build`, di Github Action tidak muncul error.

![advanced-security-dependency-graph](./img/advanced-security-dependency-graph.png)


# Referensi Tambahan
- [jwt.io](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)
- [Java JWT Implementation](https://github.com/auth0/java-jwt)

---
[🏠Back to Course Lists](https://odp-bni-330.github.io/)
