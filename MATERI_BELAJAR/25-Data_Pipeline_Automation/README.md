# Database

## Data Pipeline & Automation

Apache Kafka : message broker
Apache Spark : pemroses data ➡️ lebih _scalable_. Kalau jumlah data sedikit, pakai python cukup.

- Apakah saya butuh menggunakan `Kafka` dan `Spark`?
  - Apakah butuh data _real time_?
  - Kalau berkala, `cron job` sudah cukup.

`spark` akan menghasilkan _metrics_ ➡️ u/ pengambilan keputusan.

### Konsep Dasar

Analogi:
Ketika ingin menyusun buku ke rak, maka kita menyortir berdasarkan _genre_, lalu taruh di rak. Urutan tidak boleh dibalik.

Ketika melakukan kerja kelompok, ketua kelas melakukan pembagian tugas. Pekerjaan dari orang A baru bisa dikerjakan setelah tugas B selesai.

### Apache Airflow

Tools u/ otomasi proses sekuensial / berurutan.

Task dapat dijalankan secara parallel namun sekuensial.

Definisi:
platform u/ rencanakan, jadwalkan, pantau **workflow** scr programatis.

memungkinkan _data engineer_ u/ definisikan alur kerja sbg kode agar lebih mudah dikelola / modif.

Airflow digunakan scr luas dlm data engineering & DevOps u/ **otomatisasi** proses seperti ETL, machine learning pipeline, tugas operasional lain yg butuh orkestrasi kompleks.

![airlfow-orchestration](./img/airlfow-orchestration.png)

ketika ada satu task yang failed, bisa di-trace.

**Otomasi dalam Pemrosesan Data** : penggunaan teknologi u/:

- otomatisasi alur kerja pengolahan data
- intervensi manual ⬇️
- konsistensi proses ⬆️

agar organisasi bisa proses data dlm skala besar dgn efisien

Manfaat:

- human error ⬇️
- efisiensi operasional ⬆️
- skalabilitas sistem
- monitoring & troubleshooting

Contoh Automasi Data:

- ETL Process : proses ambil data dari bbg sumber, ubah jadi format yg sesuai, muat ke dlm sistem target seperti Data warehouse
- Analisis data real-time : proses & analisis data saat terjadi u/ pengambilan kepututsan cepat bdskan informasi terkini
- Data quality check : periksa kualitas data scr otomatis u/ pastikan data memenuhi standar
- Reporting otomatis : hasilkan & distirbusi laporan bisnis scr otomatis bdskn jadwal

Alternatif:

- Kubernetes
  - Platform orkestrasi container
- Apache NiFi
- Luigi
  - framework python u/ buat pipeline data ;
  - lebih sederhana dari Airflow
  - kurang kuat u/ kasus penggunaan sgt kompleks

Fitur Utama Apache Airflow:

- Directed Acylic Graph (DAG) : representasi visual alur kerja yg tunjukan dependensi antar tugas

![DAG](./img/DAG.png)

- Operator
  - template u/ task yg ingin dijalankan
  - definsikan apa yg dilakukan noleh task dalam DAG
  - contoh : `PythonOperator` , `BashOperator`, `SQLOperator`, `EmailOperator`
  - indempoten : dapat dijalankan ulang dgn hasil pasti sama
- Scheduler
  - u/ jadwalkan & eksekusi task
  - scr berkala periksa DAG u/ tentukan task mana yg perlu dijalankan bdskan jadwal & dependensi
  - menangani retry u/ task yg gagal
- Monitoring & Logging

Proses Alur Kerja:

- buat DAG
  - sbg kode python, tentukan task & dependensi antar task, buat blueprint
- jadwalkan & eksekusi
- monitoring & error handling

Interaksi dgn sistem lain:

- DB
  - MySQL, PostgreSQL, MongoDB
- cloud storage
  - AWS S3, Google Cloud Storage, Azure Blob storage
- API
  - API eksternal
- Analytics Tools
  - Hadoop, spark, tableau

### (HANDSON) Persiapan Workflow Automation

> file : ./handson/linux-airflow

#### Bedah

```python
# Define the DAG with Linux optimizations
dag = DAG(
    'linux_data_processing_workflow',
    default_args=default_args,
    description='Data processing workflow optimized for Ubuntu Linux',
    schedule_interval=timedelta(hours=6),  # More frequent for Linux systems
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['linux', 'ubuntu', 'data', 'processing'],
    max_active_runs=2,  # Linux can handle multiple runs
    max_active_tasks=8,  # Optimized for multi-core Linux
)

# Task #0
def check_system_info():
  ...
t0 = PythonOperator(
    task_id='check_system_info',
    python_callable=check_system_info,
    dag=dag,
    pool='linux_pool',  # Linux resource pool
)

# Task #1
def create_sample_data():
  ...
t1 = PythonOperator(
    task_id='create_sample_data',
    python_callable=create_sample_data,
    dag=dag,
    pool='linux_pool',
)

# Task #2
def process_data():
  ...
t2 = PythonOperator(
  ...
)

# Task #3
def generate_report():
  ...
t3 = PythonOperator(
  ...
)

# Task #4
def system_cleanup_and_notify():
  ...
t4 = PythonOperator(
  ...
)

# Linux-specific bash task for system information
t5 = BashOperator(
    task_id='linux_system_check',
    bash_command='''
    echo "=== Ubuntu Linux System Information ==="
    echo "Hostname: $(hostname)"
    echo "Kernel: $(uname -r)"
    echo "Ubuntu Version: $(lsb_release -d | cut -f2)"
    echo "Uptime: $(uptime)"
    echo "Load Average: $(cat /proc/loadavg)"
    echo "Memory Info: $(free -h | grep Mem)"
    echo "Disk Usage: $(df -h /opt/airflow/data | tail -1)"
    echo "Docker Info: $(docker --version 2>/dev/null || echo 'Docker not accessible')"
    echo "=== End System Check ==="
    ''',
    dag=dag,
)

# Set task dependencies with Linux optimization
t0 >> [t1, t5]  # Parallel execution (Linux advantage)
t1 >> t2 >> t3 >> t4
```

#### Cara Menjalankan

**Langkah 0** : Buat [neon database](https://console.neon.tech/app/) baru

![neon-database](./img/neon-database.png)

**Langkah 1** : Atur di `docker-compose.yml`

```yml
# CARI BARIS INI

# 1
AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://neondb_owner:npg_xxx@ep-falling-bar-a108lekf-pooler.ap-southeast-1.aws.neon.tech/airflow?sslmode=require

# 2
AIRFLOW__CELERY__RESULT_BACKEND: db+postgresql://neondb_owner:npg_xxx@ep-falling-bar-a108lekf-pooler.ap-southeast-1.aws.neon.tech/airflow?sslmode=require

# 3
CELERY_RESULT_BACKEND: db+postgresql://neondb_owner:npg_xxx@ep-falling-bar-a108lekf-pooler.ap-southeast-1.aws.neon.tech/airflow?sslmode=require
```

**Langkah 2** : Atur pool

```bash
docker compose exec airflow-webserver airflow pools set linux_pool 8 "Linux Optimized Pool"
```

**Langkah 3** : Jalankan

```bash
./setup-ubuntu.sh
```

Example Workflow:

![example-workflow-apache](./img/example-workflow-apache.png)

![tampilan-workflow](./img/tampilan-workflow.png)

Linux data processing workflow:

![tampilan-apache-workflow](./img/tampilan-apache-workflow.png)

![tampilan-data-muncul-dan-report](./img/tampilan-data-muncul-dan-report.png)

![tampilan-report-html](./img/tampilan-report-html.png)

## Elastic Search Basics

Powerful search engine built on Apache Lucene. It excels at storing, searching, and analyzing large volumes of data from various sources in near real-time.

Fitur : **Full-text search** : empowers users to identify documents containing terms that are either synonymous with or contextually relevant to the query term

Keunggulan Elastic Search:

- full text search cepat & akurat
- dukung kueri DSL (domain specific languagel )

dibangun atas `Apache Lucene`

### Komponen utama

- inverted index
  - tradisional : menggunakan pencarian berdasarkan kunci primer
  - inverted index: memetakan setiap term unik ke dokumen yg mengandungnya
  - contoh forward index:

    ```js
    Index:
    {
    Document ID: 1,
    Title: “Introduction to ElasticSearch”,
    Content: “ElasticSearch is a distributed search engine…”
    },
    {
    Document ID: 2,
    Title: “Getting Started with ElasticSearch”,
    Content: “To begin using ElasticSearch, you need to…”
    }
    ```

  - contoh inverted index:

    ```js
    Term: “Introduction”
    {
      Document ID: 1,
      Positions: [0]
    }

    Term: “ElasticSearch”
    {
      Document ID: 1,
      Positions: [1, 10]
    },
    {
      Document ID: 2,
      Positions: [3]
    }

    Term: “Getting”
    {
    Document ID: 2,
    Positions: [0]
    }
    ...
    ```

- analyzer
  - standard
  - simple
  - whitespace
  - language
  - custom
- query parser
- scoring algorithm

### Full Text Search

teknik pencarian dlm DB u/ menemukan teks yg cocok dgn kata kunci / frasa dlm seluruh dokumen -> paham konteks & relevansi dari kata2.

memungkinkan pencarian bdskan kata kunci, frasa, kecocokan fonetik u/ hasil pencarian lebih relevan & akurat.

digunakan pada search engine & e-commerce.  

🟢 **Tokenization**: Breaking down text into individual terms (words).
🟢 **Normalization**: Lowercase letters, remove punctuation, etc.
🟢 **Stemming/Lemmatization**: Reducing words to their root form (e.g., “running” becomes “run”). This improves search accuracy for synonyms and variations.
🟢 **Stop Word Removal**: Removing common words like “the,” “a,” and “an,” which don’t contribute much to search meaning.

struktur : `shard` dan `replica`

### Query DSL

- Match Query
  - pencarian teks biasa, pertimbangkan relevansi
- Term Query
  - bdskan nilai tepat tanpa analisis
- Bool Query
  - gabungan bbrp query dgn kondisi logika
- Range Query
  - rentang nilai numerik / tanggal
- Aggregations
  - analisis data & hasilkan statistik

Query vs Filter Context

Query context
  elasticsearch hitung skor relevansi (`_score`)

Filter context
  evaluasi apakah dokmen cocok dgn kriteria (ya/tdk)

#### Boolean Query

- Must
  - AND
- Should
  - OR
- Must not
  - NOT
- Filter
  - cocok, tetapi tdk pengaruh skor

Match Query vs Term Query

**Match Query** -> menyarankan juga yang lain2 dgn konteks relevan

```js
{"match":{"description":"laptop gaming"}}
```

**Term Query** -> tdk boleh typo

```js
{"term":{"categories":"laptop elektronik"}}
```

Match Phrase vs Match Query

Match Query

```js
{"match":{"description":"laptop gaming"}}
```

**Match Phrase Query** -> urutan tdk bisa diubah

```js
{"match_phrase":{"description":"laptop gaming"}}
```

Penggunaan Kibana u/ Visualisasi

- Discover
  - tampilkan & jelajahi data dari Elasticsearch dgn antarmuka yg intuitif & filter fleksibel
- Visualization
  - pie chart, bar chart, dll
- Dashboard
  - visuaslisasi dlm satu layar
- Dev Tools
  - query search scr langsung

`GET /products/_search{"query":{"match":{"name":"laptop"}}}`

### (HANDSON) ElasticSearch & Kibana

**Langkah 1** : Jalankan docker

**Langkah 2** : Access `localhost:5601`

Index managemnet

![index-management](./img/index-management.png)

Dev Tools ELK

![dev-tools-elk](./img/dev-tools-elk.png)

Contoh query untuk mendapatkan semua items:

```c
GET products/_search
{
  "size": 100,
  "query": {
    "match_all": {}
  }
}
```

Data View

![data-view](./img/data-view.png)

Visualize Library

![visualize-library](./img/visualize-library.png)

setelah penambahan data:

![visualize-library-many-data](./img/visualize-library-many-data.png)

## (FINAL HANDSON PROJECT) Integrasi SQL dan NoSQL

Hybrid Approach : SQL dan NoSQL dlm 1 aplikasi, masing2 tangani jenis data yg sesuai

Lihat konfigurasi MongoDB:

![overview-cluster](./img/overview-cluster.png)

![compass-cluster](./img/compass-cluster.png)

![connect-cluster](./img/connect-cluster.png)

Catatan : Apabila lupa password, pergi ke `Security > Database Access > Edit`

contoh isi `.env` :

![environment-variable](./img/environment-variable.png)

Buat database PostgreSQL

![SQL-editor-neon](./img/SQL-editor-neon.png)

Tampilan hasil :

![result-demo](./img/result-demo.png)
