# Konfigurasi output setelah proses provisioning sukses

output "cloud_run_url" {
  value = google_cloud_run_service.nginx.status[0].url
    # nilainya didapat dari main.tf -> google_cloud_run_service
}