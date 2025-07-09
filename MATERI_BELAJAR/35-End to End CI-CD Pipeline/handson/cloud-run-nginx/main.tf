# File utama konfigurasi provisioning yg akan di-deploy

# cloud provider : AWS/Azure/GCP
provider "google" {
  project = var.project_id      # project id
  region  = var.region          # region deployment
}               # nilai diambil dari terraform.tfvars (modularity)

# definisi resource
resource "google_cloud_run_service" "nginx" {
    # sesuaikan dengan project masing-masing
#   name     = "bostang-terraform-nginx-cloudrun-service"
  name     = var.resource_name
  location = var.region

  template {
    spec {
      containers {
        # image = "nginx:alpine"      # container image
        # image = "httpd:latest"      # container image # 2
        image = "caddy:alpine"      # container image # 3
        
        ports {
          container_port = 80       # expose port
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "3"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "noauth" {
  location = var.region
  project  = var.project_id
  service  = google_cloud_run_service.nginx.name    # nilai diambil dari resource 'google_cloud_run_service' di atas

  role   = "roles/run.invoker"
  member = "allUsers"           # semua user bisa akses tanpa perlu autentikasi
}