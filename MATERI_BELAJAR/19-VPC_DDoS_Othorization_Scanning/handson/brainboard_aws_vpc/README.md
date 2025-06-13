# VPC AWS

## Penjelasan Arsitektur VPC AWS

### 🗺️ Region: `US East (N. Virginia)`

- This defines the AWS Region where all the resources are hosted. Each region consists of multiple Availability Zones (AZs), but this diagram simplifies that part.

### 🌐 VPC: `main`

- A VPC (Virtual Private Cloud) is an isolated network environment in AWS where you can launch AWS resources.
- In this case, it's labeled `main` and contains both public and private subnets.

### 📦 Subnets

- Public Subnet (`public`):

  - Contains the `T2` instance (`web`), typically accessible from the internet.
  - Associated with a route table that routes traffic through the internet gateway (`public_rt`).
- Private Subnet (`private`):

  - Contains the MySQL instance (part of an RDS cluster) and is isolated from direct internet access.
  - It uses a DB Subnet Group (`db_subnets`).

### 🧠 Instances

- T2 instance (`web`):

  - A lightweight EC2 instance type, often used for small web servers.
  - Placed in the public subnet and connected to the internet.
- MySQL (RDS Cluster):

  - A managed relational database service.
  - Placed in the private subnet for security reasons and connected only internally.

### 🛡️ Security Groups

- web\_sg:

  - Applied to the `T2` instance.
  - Likely allows HTTP/HTTPS and maybe SSH access from the internet.
- db\_sg:

  - Applied to the RDS instance.
  - Likely allows only internal traffic (from the `web_sg` or subnet IPs).

### 📚 DB Subnet Group (`db_subnets`)

- A DB Subnet Group is a collection of subnets that Amazon RDS uses to deploy DB instances.
- Ensures high availability by deploying across multiple Availability Zones (not shown here).

### 🌐 Internet Gateway (`gw`)

- Enables internet access for resources in the VPC.
- Attached to the VPC and linked via the default route in the route table.

### 🧭 Route Tables

- public\_rt:

  - Routes traffic from the public subnet to the internet through the Internet Gateway.
  - Associated with the `public` subnet (via `public_assoc`).
- default\_route:

  - Default route table of the VPC, showing the path to the internet.

### 🔀 Route Table Association (`public_assoc`)

- Binds the `public_rt` route table to the public subnet, allowing the subnet's traffic to use those routes (e.g., to the internet gateway).

### 🔄 Connections

- The arrows show relationships like:

  - Security group associations (`vpc_security_group_ids`)
  - Subnet and route table bindings (`route_table_id`)
  - Gateway attachments (`gateway_id`)
  - Internal communication between web and database instances.

### 🧠 Summary of Architecture

- A web server (T2 instance) in a public subnet, accessible via the internet.
- A MySQL RDS database in a private subnet, only accessible by the web server.
- Security Groups and Routing Tables enforce secure and controlled access.
- Internet Gateway enables public internet access for the public subnet.

### ✅ **Kode Terraform Lengkap dan Dilengkapi**

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/24"
  tags       = merge(var.tags, {})
}

# Public Subnet
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.0.0/25"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1a"
  tags                    = merge(var.tags, { Name = "public-subnet" })
}

# Private Subnet
resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.0.128/25"
  availability_zone = "us-east-1a"
  tags              = merge(var.tags, { Name = "private-subnet" })
}

# Internet Gateway
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
  tags   = merge(var.tags, {})
}

# Route Table for public subnet
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main.id
  tags   = merge(var.tags, { Name = "public-rt" })
}

# Associate public subnet to public route table
resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public_rt.id
}

# Route to Internet via IGW
resource "aws_route" "default_route" {
  route_table_id         = aws_route_table.public_rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.gw.id
}

# Security Group for web (public)
resource "aws_security_group" "web_sg" {
  name        = "web-sg"
  description = "Allow HTTP and SSH"
  vpc_id      = aws_vpc.main.id
  tags        = merge(var.tags, {})

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Security Group for DB (private)
resource "aws_security_group" "db_sg" {
  name        = "db-sg"
  description = "Allow MySQL from web_sg"
  vpc_id      = aws_vpc.main.id
  tags        = merge(var.tags, {})

  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.web_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance (T2) in public subnet
resource "aws_instance" "instance" {
  ami           = var.ami_id
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  tags          = merge(var.tags, {})
}

# DB Subnet Group for RDS
resource "aws_db_subnet_group" "db_snets" {
  name       = "db-subnet-group"
  subnet_ids = [aws_subnet.private.id]
  tags       = merge(var.tags, {})
}

# RDS Cluster in private subnet
resource "aws_rds_cluster" "mysql" {
  engine               = "aurora-mysql"
  master_username      = var.db_username
  master_password      = var.db_password
  db_subnet_group_name = aws_db_subnet_group.db_snets.name
  vpc_security_group_ids = [aws_security_group.db_sg.id]
  tags                 = merge(var.tags, {})
}
```

---

### 🧩 Variabel Tambahan yang Perlu Disiapkan

Tambahkan variabel ini di file `variables.tf` atau langsung di file ini:

```hcl
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
```

---

### ✅ Hasil Akhir

Arsitektur ini akan:

- Membuat **VPC**dengan subnet publik dan privat
- Membuat **EC2 instance**di subnet publik yang dapat diakses dari internet
- Membuat **RDS MySQL cluster**di subnet privat hanya bisa diakses dari EC2
- Mengatur **security group**agar aman dan sesuai kebutuhan komunikasi internal
- Menghubungkan subnet publik ke internet via **Internet Gateway + route**

Jika kamu ingin saya bantu buat file `main.tf`, `variables.tf`, dan `outputs.tf` secara lengkap, saya juga bisa bantu.
