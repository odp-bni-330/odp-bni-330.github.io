variable "tags" {
  type    = map(string)
  default = {}
}

variable "ami_id" {
  description = "AMI ID for EC2 instance"
  type        = string
}

variable "db_username" {
  type = string
}

variable "db_password" {
  type = string
  sensitive = true
}
