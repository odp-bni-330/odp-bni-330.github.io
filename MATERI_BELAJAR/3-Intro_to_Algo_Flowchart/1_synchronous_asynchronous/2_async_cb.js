// DESKRIPSI : Demonstrasi penggunaan Asynchronous callback

/********* Asynchronous Callback *********/

// deklarasi variabel
var uangAwal = 100000
var hargaRinso = 5000

// deklarasi fungsi
let belanja = (uang, hargaBarang, cb) =>{
    setTimeout(() => {      // asynchronous
        if (uang >= hargaBarang){
        console.log("Berhasil belanja");
        let sisaUang = uang - hargaBarang;
        // return sisaUang                     -> akan tidak bisa dibaca baris 26 karena belanja() asynchronous 
        cb(sisaUang);                        //-> solusi : menggunakan callback
    }
    }, 2000);
}

// tampilkan nilai variabel
console.log("Uang Awal: Rp",uangAwal);
console.log("Harga rinso: Rp",hargaRinso);

// invoke fungsi
belanja(uangAwal, hargaRinso, function (sisaUang) {         // synchronous
    console.log("sisa Uang: Rp",sisaUang);      // akan berjalan setelah callback (baris 16)
    
})

/****************************************/

// pengamatan : output dari fungsiAsynchronous tidak bisa dipanggil fungsi lain (misal: console.log()) kalau menggunakan return. Harus menggunakan callback.