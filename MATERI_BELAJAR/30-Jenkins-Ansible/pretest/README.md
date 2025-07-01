# Kuis Minggu 8

## Soal 1

Apa tujuan utama dari CI/CD dalam pengembangan perangkat lunak?

- [ ] Menyimpan salinan kode secara manual di beberapa tempat
- [ ] Menghilangkan kebutuhan pengujian aplikasi sama sekali
- [ ] Menambah total waktu kerja programmer tanpa mengubah proses pengembangan
- [x] Membantu tim pengembang bekerja lebih cepat dan lancar dengan mengotomatisasi proses yang berulang seperti pengujian dan penggabungan kode serta pengiriman aplikasi

## Soal 2

Dalam CI/CD, proses otomatis apa yang biasanya dijalankan setiap kali ada perubahan kode yang dikirim ke repositori?

- [ ] Melakukan review kode secara manual
- [x] Melakukan build, pengujian otomatis, dan integrasi kode secara otomatis
- [ ] Mengirimkan email notifikasi ke seluruh tim tanpa pengujian
- [ ] Menyalin kode ke dalam dokumen teks

## Soal 3

Mengapa otomatisasi dalam CI/CD penting untuk tim pengembang perangkat lunak?

- [ ] Karena menghilangkan sepenuhnya peran manusia dalam pengembangan
- [ ] Karena memudahkan penyimpanan data di cloud tanpa pengujian
- [x] Karena membantu otomatisasi dari tugas-tugas berulang yang dilakukan secara manual dan mempercepat siklus pengembangan
- [ ] Karena memperlampat proses integrasi kode agar lebih terkontrol

## Soal 4

Dalam GitHub Action, apa file konfigurasi yang digunakan untuk mendefinisikan workflow?

- [x] `workflow.yaml` (atau `.yml`) di dalam folder `.github/workflows`
- [ ] `Jenkinsfile`
- [ ] `config.ini`
- [ ] `package.json`

## Soal 5

Manakah praktik terbaik berikut yang dapat meningkatkan keamanan workflow CI/CD di Github Actions?

- [ ] Menyimpan semua secrets dan token akses di dalam kode sumber repositori
- [x] Menggunakan Github Secrets untuk menyimpan data sensitif dan membatasi akses ke workflow penting
- [ ] Membagikan token akses secara publik agar mudah digunakan tim
- [ ] Menonaktifkan autentikasi dua faktor di akun github

## Soal 6

Apa yang dimaksud dengan Infrastructure as Code (IaC)?

- [ ] Mengelola infrastruktur TI secara manual menggunakan perangkat keras
- [x] Mengelola dan mengotomatisasi infrastruktukr TI menggunakan kode sehingga proses deployment dan konfigurasi bisa dilakukan secara otomatis dan konsisten
- [ ] Membuat aplikasi tanpa menggunakan kode
- [ ] Menyimpan data infrastruktur di dalam database

## Soal 7

Apa keuntungan menggunakan IaC dalam pengelolaan infrastruktur?

- [ ] Mengharuskan tim IT melakukan konfigurasi manual setiap saat
- [ ] Menghilangkan kebutuhan dokumentasi infrastruktur
- [x] Mempercepat penyediaan dan pengelolaan infrastruktur dengan cara yang konsisten dan dapat diulang sehingga mengurangi kesalahan manusia
- [ ] Membuat server menjadi lebih mahal.

## Soal 8

Tools apa yang umum digunakan untuk menerapkan Infrastructure as Code?

- [ ] Photoshop dan Illustrator
- [x] Terraform, Ansible, Puppet, dan Chef
- [ ] Google Docs dan Sheets
- [ ] Microsoft 365

## Soal 9

Bagaimana cara IaC membantu dalam praktik DevOps?

- [x] Dengan menyatukan proses pengelolaan infrastruktur dan aplikasi secara otomatis sehingga pengembangan dan operasional dapat lebih cepat dan konsisten
- [ ] Dengan memisahkan deployment infrastuktur dan aplikasinya agar tidak terkait
- [ ] Dengan menambah pekerjaan manual pada pengelolaan server
- [ ] Dengan menggantikan tim DevOps sepenuhnya

## Soal 10

Apa risiko yang dapat dikurangi dengan penerapan IaC?

- [ ] Risiko penggunaan listrik berlebihan
- [ ] Risiko kehilangan data karena backup otomatis
- [ ] Risiko hilangnya akses internet
- [x] Risiko kesalahan konfigurasi manual dan inkonsistensi lingkungan antara pengembangan, testing, dan produksi

## Soal 11

Apa fungsi utama dari Prometheus dalam sistem monitoring?

- [ ] Mengelola pengaturan jaringan antar server
- [x] Mengumpulkan dan menyimpan metrik waktu nyata dari aplikasi dan sistem
- [ ] Menyimpan data konfigurasi server
- [ ] Menyediakan antarmuka pengguna untuk mengedit kode aplikasi

## Soal 12

Apa yang dimaksud dengan "time series data" pada Prometheus?

- [ ] Data snapshot yang tidak berubah setelah direkam
- [ ] Data yang hanya menyimpan nilai statis untuk setiap entitas
- [x] Data yang disimpan sebagai rangkaian nilai dengan timestamp
- [ ] Data yang berisi konfigurasi server dan user

## Soal 13

Dalam Prometheus, apa peran dari PromQL?

- [ ] Bahasa pemrograman untuk membuat aplikasi
- [x] Bahasa query untuk mengambil dan memanipulasi metrik
- [ ] Bahasa scripting untuk mengotomatisasi deploymengt
- [ ] Bahasa konfigurasi untuk penyimpanan data

## Soal 14

Metode apa yang digunakan Prometheus untuk mengumpulkan data metrik dari target?

- [ ] Push dari target ke Prometheus
- [ ] Transfer file batch secara manual
- [ ] Melalui koneksi database relasional
- [x] Pull dari Prometheus ke target

## Soal 15

Apa tujuan dari fitur alerting pada Prometheus?

- [ ] Menyimpan metrik dalam database eksternal
- [ ] Menampilkan dashboard metrik secara visual
- [x] Mengirimkan notifikasi berdasarkan kondisi metrik tertentu
- [ ] Mengelola akses pengguna ke server

## Soal 16

Apa fungsi utama Ansible dalam proses automasi deployment?

- [ ] Menyimpan kode program aplikasi
- [ ] Mengontrol versi kode sumber
- [x] Mengotomatisasi konfigurasi dan deployment aplikasi secara deklaratif
- [ ] Menyediakan layanan hosting aplikasi

## Soal 17

Apa peran Jenkins dalam pipeline CI/CD?

- [ ] Sebagai alat monitoring performa aplikasi
- [ ] Sebagai container runtime yang menjalankan aplikasi
- [x] Sebagai alat orkestrasi deployment otomatis dan continous integration/continous delivery
- [ ] Sebagai basis data untuk menyimpan artefak aplikasi

## Soal 18

Dalam konteks Ansible, apa itu "playbook"?

- [x] File YAML yang berisi kumpulan perintah untuk menjalankan konfigurasi dan deployment
- [ ] Sebuah skrip shell untuk menginstall aplikasi
- [ ] File konfigurasi Jenkins untuk pipeline
- [ ] Dokumentasi manual untuk mengatur server

## Soal 19

Bagaimana cara Jenkins mengintegrasikan Ansible dalam pipeline deployment?

- [ ] Menggunakan Ansible sebagai database backend Jenkins
- [x] Melalui plugin Ansible yang menjalankan playbook pada agent Jenkins
- [ ] Dengan menulis ulang playbook dalam bahsa Groovy
- [ ] Dengan mengubah konfigurasi server secara manual oleh admin

## Soal 20

Apa keuntungan menggunakan automasi deployment dengan Ansible dan Jenkins?

- [ ] Mengelola jaringan lokal tanpa konfigurasi
- [ ] Menggantikan semua server fisik dengan cloud
- [ ] Membuat aplikasi berjalan lebih cepat secara langsung
- [x] Mengurangi intervensi manual sehingga menghemat waktu dan mengurangi kesalahan

## Soal 21

Apa fungsi utama dari Kubernets dalam pengelolaan aplikasi?

- [ ] Mengatur jaringan fisik antar server
- [x] Mengelola dan mengorkestrasi container aplikasi secara otomatis
- [ ] Menyediakan layanan database untuk aplikasi
- [ ] Mengganti sistem operasi pada server

## Soal 22

Apa yang dimaksud dengan "pod" dalam kubernets?

- [x] Unit terkecil dari deployment yang terdiri dari satu atau beberapa container yang berjalan bersama-sama.
- [ ] Sebuah virtual machine yang menjalankan aplikasi
- [ ] File konfigurasi dalam format YAML untuk aplikasi
- [ ] Alat monitoring kubernets

## Soal 23

Dalam kubernetes, apa itu "node"?

- [x] Server fisik atau virtual yang menjalankan Pod dan container
- [ ] Sebuah layanan load balancing
- [ ] Database untuk metadata aplikasi
- [ ] File konfigurasi jaringan

## Soal 24

Apa fungsi dari Kubernetes "Service"?

- [x] Menyediakan sebuah endpoint stabil untuk mengakses kumpulan pod yang relevan
- [ ] Mengatur backup data aplikasi
- [ ] Menyimpan log aplikasi secara terpusat
- [ ] Mengontrol akses user ke cluster Kubernetes

## Soal 25

Apa tujuan utama dari Kubernets "Deployment"?

- [ ] Membuat cadangan data aplikasi
- [x] Mengatur ketersediaan dan update otomatis aplikasi dengan mendefinisikan state yang diinginkan
- [ ] Mengontrol keamanan jaringan cluster
- [ ] Menyediakan interface pengguna grafis (GUI)

## Soal 26

Apa mekanisme utama yang digunakan Kubernetes untuk mengontrol akses pengguna ke sumber daya dalam cluster

- [x] Role-Based Access Control (RBAC)
- [ ] Kubernetes Firewall
- [ ] Container Runtime
- [ ] Network Policy

## Soal 27

Apa fitur kubernetes yang membantu mengamankan jaringan antar pod?

- [ ] Persistent Volumes
- [x] Network Policies
- [ ] ReplicaSets
- [ ] ConfigMaps

## Soal 28

Dalam penerapan RBAC di Kubernetes, apa hal utama yang harus dilakukan untuk membatasi hak akses pengguna?

- [ ] Menonaktifkan autentikasi agar tidak ribet
- [ ] Membuka akses API server untuk publik secara bebas
- [x] Mendefinisikan role dan RoleBinding yang spesifik berdasarkan kebutuhan pengguna
- [ ] Memberikan akses admin penuh ke semua pengguna agar mudah mengelola cluster

## Soal 29

Di kubernetes, fitur apa yang digunakan untuk memyimpan dan mengelola data sensitif seperti password dan token secara aman?

- [ ] Annotations
- [ ] ConfigMaps
- [x] Secrets
- [ ] PersistentVolumeClaims

## Soal 30

Saat melakukan observabilitas di Kubernetes dengan prometheus dan Grafana, manfaat apa yang paling signifikan untuk keamanan dan troubleshooting sistem?

- [ ] Meningkatkan kecepatan deployment aplikasi
- [ ] Mengurangi ukuran container image sehingga lebih ringan
- [ ] Mengotomatisasi pengaturan jaringan antar pod
- [x] Mendeteksi anomalitas, memantau kesehatan komponen, dan melakukan troubleshooting secara realtime

## Soal 31

Apa model layanan cloud computing yang menyediakan infrastuktur komputasi sebagai layanan seperti server dan jaringan?

- [ ] Software as a Service (SaaS)
- [ ] Function as a Service (FaaS)
- [x] Infrastructure as a Service (IaaS)
- [ ] Platform as a Service (PaaS)

## Soal 32

Apa karakteristik utama dari cloud computing yang membedakannya dari model computing tradisional?

- [ ] Memerlukan perangkat keras khusus di lokasi pengguna
- [x] Skalabilitas dinamis dan pembayaran berdasarkan penggunaan (pas-as-you-go)
- [ ] Tidak memerlukan virtualisasi
- [ ] Semua layanan harus diinstal secara manual di komputer pribadi

## Soal 33

Apa keuntungan utama menggunakan model public cloud dibandingkan private cloud?

- [ ] Kontrol penuh atas hardware
- [ ] Tidak ada kebutuhan untuk koneksi internet
- [ ] Susah untuk digunakan
- [x] Biaya lebih rendah dan kemudahan akses tanpa perlu pengelolaan infrastruktur sendiri

## Soal 34

Apa istilah yang merujuk pada penyediaan layanan cloud yang menyediakan platform untuk mengembangkan, menjalankan, dan mengelola aplikasi tanpa harus mengelola infrastruktur secara langsung?

- [ ] Infrastructure as a Service (IaaS)
- [x] Platform as a Service (PaaS)
- [ ] Software as a Service (SaaS)
- [ ] Network as a Service (NaaS)

## Soal 35

Dalam konteks cloud computing, apa yang dimaksud dengan "scalability"?

- [ ] Kemampuan untuk memperbaiki kerusakan perangkat keras secara otomatis
- [ ] Proses encrypt data di cloud
- [x] Kemampuan untuk menambah atau mengurangi sumber daya secara mudah sesuai kebutuhan
- [ ] Penghapusan data secara otomatis setelah penggunaan
