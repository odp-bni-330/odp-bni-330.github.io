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
