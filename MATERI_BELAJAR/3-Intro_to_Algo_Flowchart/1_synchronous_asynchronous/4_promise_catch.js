// DESKRIPSI : Demonstrasi penggunaan Asynchronous callback (penghindaran callback hell)
// menggunakan `promise` dan `catch`

/********* Asynchronous Callback (menghindari callback hell) *********/

// deklarasi variabel
var uangAwal = 100000
var hargaRinso = 5000
var hargaTempe = 3000
var hargaTumblr = 120000

// deklarasi fungsi
let belanja = (uang, hargaBarang) =>{

    return new Promise((resolve, reject) => {
        // resolve : set timeout
        setTimeout(() => {      // asynchronous
        if (uang >= hargaBarang){
        console.log("Berhasil belanja");
        let total = uang - hargaBarang;
        // cb(total);                        //-> solusi : menggunakan then-catch chaining

        // ketika uang cukup -> resolve
        resolve(total);
        }
        // ketika uang tidak cukup -> reject
        else{
            reject("Maaf uang tidak cukup!");
        }
    }, 500);   // setiap pengecekan memakan waktu 1/2 detik

    })
    
}

// tampilkan nilai variabel
console.log("Uang Awal: Rp",uangAwal);
console.log("Harga rinso: Rp",hargaRinso);
console.log("Harga tempe: Rp",hargaTempe);
console.log("Harga Tumblr : Rp",hargaTumblr);

// invoke fungsi
belanja(uangAwal, hargaRinso)       // ORDER#1 : beli rinso
    // apabila ORDER#1 sukses, maka masuk ke .then pertama
    .then((result)=>{
        console.log("sisa uang:",result);
        
        return belanja(result,hargaTempe); // ORDER#2 : beli tempe
    })
    // apabila ORDER#2 sukses, maka masuk ke .then kedua
    .then((sisauang2)=>{
        console.log("sisa uang(2):",sisauang2);
        
        return belanja(sisauang2, hargaTumblr); // ORDER#3 : beli tumblr

    })
    // apabila ada ORDER#i yang tidak berhasil, maka .then chaining stop dan masuk ke .catch
    .catch(err=>{ 
        console.log("error:",err);
    });

/****************************************/