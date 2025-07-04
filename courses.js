// Mengambil data dari file JSON eksternal
fetch('courses.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data courses.json");
    }
    return response.json(); // Mengubah response menjadi format JavaScript
  })
  .then((courses) => {
    const container = document.getElementById('courses-container');

    // Untuk setiap course, buat elemen HTML dan tambahkan ke container
    courses.forEach((course) => {
      const col = document.createElement('div');
      col.className = "col-12 col-md-6 col-lg-4"; // Grid responsif Bootstrap

      // Template HTML kartu course
      col.innerHTML = `
        <div class="course-card">
          <img width="100px" src="${course.image}" alt="${course.alt}">
          <h6 class="card-subtitle">${course.day} : ${course.title}</h6>
          <a href="${course.link}" class="btn btn-outline-primary btn-sm view-program">Lihat Materi</a>
        </div>
      `;

      container.appendChild(col); // Tambahkan ke DOM
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan saat memuat data course:", error);
  });
