# "TokoKu"

## Latar Belakang

"TokoKu" adalah sebuah startup e-commerce yang sedang berkembang pesat di Indonesia. Dalam setahun terakhir, jumlah pengguna dan transaksi harian meningkat secara signifikan, mencapai rata-rata 10.000 transaksi per hari. TokoKu menggunakan ==arsitektur monolitik== dengan backend berbasis PHP Laravel dan database MySQL yang berjalan di server fisik tunggal. Database ini menampung seluruh data produk, pengguna, pesanan, dan riwayat transaksi.

Sejak tiga bulan terakhir, tim teknis TokoKu mulai menerima banyak keluhan dari pengguna terkait performa aplikasi yang lambat, terutama saat jam sibuk (pukul 19:00 - 22:00 WIB). Keluhan meliputi:

- ==Loading== halaman produk yang memakan waktu lama.
- Proses checkout yang seringkali mengalami timeout.
- Pencarian produk yang ==tidak responsif==.
- Dashboard admin untuk melihat laporan penjualan menjadi sangat lambat.
- Tim IT telah melakukan beberapa upaya awal seperti menaikkan spesifikasi ==RAM dan CPU== server, namun ==peningkatan== performa yang signifikan ==tidak terlihat==. Mereka menduga ada bottle neck di database.

## Kondisi Database Saat Ini

Berikut adalah beberapa observasi dan data yang berhasil dikumpulkan oleh tim IT:

- Ukuran Database: sekitar 500 GB.
- Tabel-tabel Kritis:
- products: sekitar 5 juta baris.
- users: sekitar 2 juta baris.
- orders: sekitar 10 juta baris (bertambah cepat).
- order_items: sekitar 50 juta baris.
- Query yang Sering Dieksekusi:
  - `SELECT * FROM products WHERE category_id = X AND price BETWEEN Y AND Z ORDER BY created_at DESC LIMIT 20;` (Pencarian produk)
  - `INSERT INTO orders (...) VALUES (...);` (Checkout)
  - `INSERT INTO order_items (...) VALUES (...);` (Checkout)
  - `UPDATE products SET stock = stock - N WHERE id = X;` (Update stok setelah pembelian)
  - `SELECT COUNT(*) FROM orders WHERE user_id = X AND status = 'pending';` (Dashboard pengguna)
  - `SELECT SUM(total_price) FROM orders WHERE created_at BETWEEN X AND Y;` (Laporan admin)
- Konfigurasi MySQL:
  - `innodb_buffer_pool_size` diatur ke 8GB (Total RAM server 32GB).
  - `max_connections` diatur ke 500.
  - Belum ada replikasi atau sharding yang diimplementasikan.
  - Logging (binlog, slow query log) aktif.

## Permasalahan

Tim teknis TokoKu perlu mengidentifikasi secara spesifik apa yang menjadi bottle neck utama pada database MySQL mereka, melakukan analisis akar masalah, dan merumuskan solusi yang efektif untuk mengatasi masalah performa.

## Pertanyaan Studi Kasus

Sebagai seorang konsultan database, Anda diminta untuk membantu tim TokoKu. Jawablah pertanyaan-pertanyaan berikut secara komprehensif:

### Identifikasi Potensi Bottle Neck

Berdasarkan deskripsi dan data yang diberikan, sebutkan minimal ==tiga potensi bottle neck database== yang paling mungkin terjadi di TokoKu. Jelaskan mengapa Anda memilih potensi tersebut dan kaitkan dengan keluhan pengguna.

Jawab

- I/O Bottleneck
  - antrian I/O naik
  - waktu antrian naik

- Memory Bottleneck
  - konfigurasi memori kurang tepat -> RAM sudah ditambah namun `max_connection` belum diset, `buffer_pool_size` blm diatur.

- CPU Bottleneck
  - ada query yang belum optimal

### Metodologi Analisis

Langkah-==langkah== apa yang akan Anda lakukan untuk ==menganalisis dan mengkonfirmasi bottle neck== yang Anda duga? Sebutkan minimal ==tiga alat atau perintah MySQL/Linux== yang akan Anda gunakan dan jelaskan bagaimana setiap alat tersebut membantu dalam analisis.

Jawab

- `EXPLAIN`
- `EXPLAIN ANALYZE`
- `top` atau `htop`

### Rekomendasi Solusi

Setelah bottle neck terkonfirmasi, berikan minimal ==tiga rekomendasi solusi== untuk mengatasi masalah performa database TokoKu. Untuk setiap solusi, jelaskan secara detail implementasinya dan potensi dampaknya terhadap performa. Pertimbangkan solusi jangka pendek dan jangka panjang.

Jawab

1. terapkan indexing

### Implikasi dan Pertimbangan Masa Depan

Selain solusi langsung, apa saja ==implikasi atau pertimbangan masa depan== yang harus dipikirkan TokoKu terkait skalabilitas database mereka mengingat pertumbuhan pengguna yang pesat?

Jawab

- migrasi ke arsitektur micoservices, masing” layanan bisa menjadi layanan” kecil (produycts, order, user service), sehingga query berat dari satu domain ga akan ganggun service lainnya
- ⁠migrais ke cloud atau hybrid (untuk bisa mendapatkan layanan auto-scalling, backup dan failover otomatis) bisa pakai amazon  atau provider lainnya
- ⁠Overvailitiy dan monitoring yg lebih kuat (memantau performa dan kesehatn sistem secara realtime speerti pake prometheus dan grafana utk bisa deteksi bottlenck lebih awal dan liat benan database nay di sisi mana di jam berapa, query nya yg mana, dll)
- menerapkan auto scaling
