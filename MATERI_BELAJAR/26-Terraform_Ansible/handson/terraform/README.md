# Pengenalan Terraform

## 🌱 **1. Pengenalan Singkat**

Terraform adalah **Infrastructure as Code (IaC)** tool dari HashiCorp yang memungkinkan kamu membuat, mengelola, dan mengubah infrastruktur cloud seperti AWS, GCP, Azure, dan lainnya **menggunakan file konfigurasi**.

---

## 📦 **2. Struktur Dasar File Terraform**

Terraform menggunakan file berakhiran `.tf`, dengan struktur umum:

```hcl
provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

* `provider` → layanan cloud (AWS, GCP, dll).
* `resource` → sumber daya yang ingin dibuat (VM, DB, dll).

---

## 🛠️ **3. Instalasi & Setup Awal**

**Cek versi terraform:**

```bash
terraform version
```

**Contoh project struktur:**

```bash
mkdir terraform-demo && cd terraform-demo
touch main.tf
```

---

## 🚀 **4. Siklus Kerja Terraform (Workflow)**

| Langkah      | Perintah            | Fungsi                              |
| ------------ | ------------------- | ----------------------------------- |
| Inisialisasi | `terraform init`    | Download provider dan setup plugin  |
| Review       | `terraform plan`    | Menampilkan rencana perubahan       |
| Eksekusi     | `terraform apply`   | Terapkan perubahan ke infrastruktur |
| Hapus        | `terraform destroy` | Hapus semua resource                |

---

## 🧪 **5. Contoh Proyek Lokal (Null provider)**

Buat file `main.tf`:

```hcl
provider "null" {}

resource "null_resource" "contoh" {
  provisioner "local-exec" {
    command = "echo Hello Terraform"
  }
}
```

Jalankan:

```bash
terraform init
terraform apply
```

---

## 🧠 **6. Konsep Penting**

* **State File** (`terraform.tfstate`): menyimpan status infrastruktur terakhir.
* **Variables** (`variable` dan `output`):

  ```hcl
  variable "region" {
    default = "ap-southeast-1"
  }

  output "instance_ip" {
    value = aws_instance.web.public_ip
  }
  ```
* **Modules**: Reusable configuration.

---

## 🗂️ **7. Rekomendasi Struktur Folder**

```
terraform-demo/
├── main.tf
├── variables.tf
├── outputs.tf
└── terraform.tfvars
```

---

## 📚 **8. Sumber Belajar**

* Dokumentasi resmi: [https://developer.hashicorp.com/terraform/docs](https://developer.hashicorp.com/terraform/docs)
* Latihan gratis: [https://learn.hashicorp.com/terraform](https://learn.hashicorp.com/terraform)
* Buku: *Terraform: Up & Running* oleh Yevgeniy Brikman

---

## 🔜 **Next Step**

Kalau kamu sudah siap melangkah ke cloud, mulai dari:

* Daftar akun AWS gratis (jika belum)
* Gunakan kredensial AWS CLI (`aws configure`)
* Buat EC2 instance sederhana via Terraform

