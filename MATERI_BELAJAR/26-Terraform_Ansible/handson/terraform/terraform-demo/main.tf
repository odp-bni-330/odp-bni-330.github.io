provider "null" {}

resource "null_resource" "contoh" {
  provisioner "local-exec" {
    command = "echo Hello Terraform"
  }
}

