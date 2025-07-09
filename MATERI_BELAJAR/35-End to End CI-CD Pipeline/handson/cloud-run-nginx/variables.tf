# MenDEKLARASIkan variabel yang akan dipakai pada proses provisioning

# memilih project untuk di-apply
variable "project_id" {
  description = "Google Cloud Project ID"     # diusahakan se-deskriptif mungkin
  type        = string
}

# mendefinisikan region dari deployment app
variable "region" {
  description = "Region to deploy Cloud"
  type        = string
  default     = "asia-southeast2"       # jakarta
}

# nama resource yg di-provision
variable "resource_name" {
  description = "Nama dari resource yang mau dipakai"
  type        = string
}