// DESKRIPSI : berbagai macam metode tentang javascript object

/********** membuat object **********/
let mobil = {
    color : "putih",
    CC    : 1800,
    merk  : "Honda",
    tipe  : "Civic",
    jenis : ['h','c','r'],
    kapasitas_penumpang : 5
};

console.log(mobil);

/********** mengakses properti objek **********/
// cara 1
console.log("warna mobil:",mobil.color);

// cara 2
console.log("merk mobil:",mobil['merk']);

// simpan dulu di variabel (kunci dinamis)
key = 'kapasitas_penumpang';
console.log("Kapasitas penumpang:",mobil[key]);

// akses elemen string yang merupakan properti objek
console.log("jenis:",mobil.jenis[0]);
console.log("jenis:",mobil['jenis'][0]);

/********** Object Method **********/
// menampilkan semua KEY dari objek mobil
console.log(Object.keys(mobil));

// menampilkan semua VALUE dari objek mobil
console.log(Object.values(mobil));

/********** hasOwnProperty **********/
// memeriksa apakah objek memiliki suatu properti
console.log(mobil.hasOwnProperty('CC'));
console.log(mobil.hasOwnProperty('tahun_keluaran'));

/********** entries **********/
// mengembalikan pasangan key-value dalam bentuk array
console.log(Object.entries(mobil));