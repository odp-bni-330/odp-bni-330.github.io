// DESKRIPSI : menggunakan async await

// Deklarasi variabel
const uangAwal = 100000; // kasus kurang uang
// const uangAwal = 128000;  // kasus berhasil belanja sampai habis
const hargaRinso = 5000;
const hargaTempe = 3000;
const hargaTumblr = 120000;

// Fungsi untuk belanja (mengembalikan Promise)
function belanja(uang, hargaBarang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (uang >= hargaBarang) {
        const sisaUang = uang - hargaBarang;
        console.log(`Berhasil belanja! Harga: ${hargaBarang}, Sisa: ${sisa}`);
        resolve(sisaUang);
      } else {
        reject(`Uang tidak cukup! Dibutuhkan: ${hargaBarang}, Uang tersedia: ${uang}`);
      }
    }, 1000); // Simulasi proses async
  });
}

// Fungsi utama menggunakan async/await
async function prosesBelanja() {
  try {
    let sisa = uangAwal;
    
    // Beli Rinso
    sisa = await belanja(sisa, hargaRinso);
    
    // Beli Tempe
    sisa = await belanja(sisa, hargaTempe);
    
    // Beli Tumblr
    sisa = await belanja(sisa, hargaTumblr);
    
    console.log("Sisa uang akhir:", sisa);
  } catch (error) {
    console.log("Terjadi error:", error);
  }
}

// Jalankan proses belanja
prosesBelanja();