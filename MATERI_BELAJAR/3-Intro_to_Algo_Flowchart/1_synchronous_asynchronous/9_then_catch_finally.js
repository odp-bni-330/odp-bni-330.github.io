// DESKRIPSI : penggunaan finally
    // finally selalu dipanggil terlepas resolve atau reject

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
        // cb(total);                        //-> solusi : menggunakan callback

        // ketika uang cukup -> resolve
        resolve(total);
    }
    // ketika uang tidak cukup -> reject
    else{
        reject("Maaf uang tidak cukup!");
    }
    }, 2000);

    })
    
}

// tampilkan nilai variabel
console.log("Uang Awal: Rp",uangAwal);
console.log("Harga rinso: Rp",hargaRinso);
console.log("Harga tempe: Rp",hargaTempe);
console.log("Harga Tumblr : Rp",hargaTumblr);

// invoke fungsi
belanja(uangAwal, hargaRinso)
    .then((result)=>{
        console.log("sisa uang:",result);
        
        return belanja(result,hargaTempe);
    })
    .then((sisauang2)=>{
        console.log("sisa uang(2):",sisauang2);
        
        return belanja(sisauang2, hargaTumblr); // Lanjut beli tumblr

    })
    .catch(err=>{
        console.log("error:",err);
    })
    .finally(()=>{
        console .log("aku selalu terpanggil");
    })
    ;

/****************************************/
