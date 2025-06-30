# Soft Skill

## Troubleshooting & Debugging

### Troubleshooting

proses menganalisis & memecahkan masalah u/ temukan **akar penyebab masalah (root cause)** lalu ambil langkah u/ perbaikinya.

-> mencari tahu **kenapa** sesuatu tdk berkerja sesuai harapan lalu memperbaikinya.

kalau sdh tahu penyebabnya, itu hanya _fixing_.

| **contoh**                 | **step**                                                 |
| :------------------------- | :------------------------------------------------------- |
| website lambat             | cek latency - bandwidth - resource usage - logs - DB     |
| API return error `500`     | cek stack trace - input data - koneksi DB - kode backend |
| service di Kubernets crash | cek logs pod - resource limit - health check - volume    |

> A Java Servlet is a Java class designed to extend the capabilities of servers, particularly web servers, by handling client requests and generating dynamic responses. Servlets are a core component of Java web applications and operate within a servlet container (e.g., Apache Tomcat, GlassFish), which manages their lifecycle and handles communication with the web server.

**Tahapan umum troubleshooting**:

1. identifikasi **gejala**
   - contoh: `500 Internal Server Error`
2. kumpulkan **informasi** (log, metrics, observasi)
   - menggunakan tools seperti `Grafana`, `logstash` alih-alih baca secara manual
   - contoh : diamati pada `Grana` terdapat _spike_ pada CPU usage.
3. **analisis** & hipotesis
   - contoh : perbesar application pool
4. **uji** solusi scr bertahap
5. **verifikasi** hasil perbaikan
6. **dokumentasi** root cause & fix.
   - Dokumen RCA (root cause analysis)

**Tujuan**:

- ⬇️ downtime
- cegah masalah berulang
- jaga keandalan sistem
- beri pembelajaran teknis u/ tim

> A post-mortem meeting, also known as a "lessons learned" meeting or retrospective, is a structured discussion held after a project or significant event to analyze what happened, identify what went well, what didn't, and how to improve for future efforts. It's a blameless process focused on learning and growth, not on assigning blame

### Root Cause Analysis (RCA)

metode analisis **akar penyebab** masalah, bukan hanya **gejala** agar masalah tdk berulang & solusi tepat sasaran.

**Tahapan RCA**:

1. Identifikasi masalah
   - deskripsikan insiden scr ringkas.
   - apa, kapan, dampaknya apa
   - contoh:
     - "API checkout lambat slm 10 menit pada 28 Juni 2025 pukul 10:00 WIB"
2. Kumpulkan data & bukti
   - logs (app, access, DB)
   - metrics (CPU, latency, error rate)
   - timeline kejadian (f/ monitoring tools)
   - screenshots, request samples, stack trace
3. Analisis Gejala
   - dgn tools observability: `Grafana`, `Jaeger`, `Prometheus`
   - telusuri anomali: spike error, drop traffic, DB slow query
   - amati service yg terdampak
4. Telusuri **Alur sistem**
   - lihat diagram arsitektur
   - end-to-end tracing : client -> API -> service -> DB
5. Terapkan teknik RCA
   - **5 Whys analysis**
     - contoh:
       - reuqest delay 5 detik ↴
       - timeout ke service pembayaran ↴
       - retry 3x ↴
       - service pembayaran error rate 80% ↴
       - ada perubahan routing DNS
   - **Fishbone Diagram**
   - Timeline reconstruction
6. Tentukan Root cause
7. Rekomendasi Solusi
   - solusi jangka pendek (quick fix / workaround)
   - solusi jangka panjang (preventif, redesign, automation)
8. Dokumentasikan jdi RCA
   - Bagian:
     - Deskripsi masalah
     - Timeline
     - Bukti
     - Root Cause
     - Solusi
     - PIC / Tim terkait
9. Lakukan Post-mortem review
    - review RCA bersama tim (SRE, DevOps, Dev)
    - ambil pelajaran & identifikasi perbaikan proses
    - update dokumentasi / SOP (bila perlu)

#### Contoh Singkat RCA

---

**Tanggal/Waktu** : 28 Juni 2025, 10:00 - 10:15 WIB
**Dampak**: Checkout gagal di 70% user

**Timeline**:

- 10:00 - lonjakan error `504`
- 10:02 - metrics tunjukkan latency naik drastis
- 10:05 - ditemukan service payment error akibat DNS issue
- 10:10 - rollback konfigurasi DNS dilakukan
- 10:15 - sistem kembali normal

**Root cause**:

kesalahan konfigurasi DNS yg sebabkan service payment tdk bisa di-resolve oleh service checkout.

**Solusi**:

- rollback DNS config
- tambahkan validasi pre-deploy
- monitoring tambahan u/ error DNS

**PIC**:

Tim Infras + developer checkout

---
