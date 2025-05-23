// mengambil elemen DOM by ID
let title_page = document.getElementById('header-id')
let biodata = document.getElementById('biodata-id')

// mengambil elemen DOM by class
let biodataorangtua = document.getElementsByClassName('biodata-orangtua-class')

// mengambil elemen DOM by tag
let h1bytag = document.getElementsByTagName('h1')

// mengambil elemen DOM by query selector
let anotherHeading = document.querySelector("#header-id")       // # : id
let anotherHeading2 = document.querySelector(".biodata-orangtua-class")     // . : class

// mendapatkan informasi elemen di konsol
console.log("elemen title page:",title_page);
console.log("elemen title page:",biodata.innerHTML);
console.log("elemen title page:",biodata.innerText);
console.log("elemen title page:",biodataorangtua);

console.log("elemen title page:",h1bytag);
console.log(anotherHeading)
console.log(anotherHeading2)

// akses konten dari class -> indeksnya bisa dilihat di inspect element
console.log(biodataorangtua[0].innerHTML);


// re-assign nilai / mengubah isi elemen
biodata.innerHTML = "<p><b>Nama:</b> Bostang Palaguna</p><p><b>TPP</b>: T070556</p>"

biodataorangtua[0].innerHTML = "<ul><li><b>Nama</b>: Erika Marpaung</li><li><b>Hubungan</b> : Ibu </li></ul>"

getheadingtwo = document.getElementsByTagName('h2')
console.log(getheadingtwo[0]);


// menambahkan atribut pada tag
// getheadingtwo[0].id = "headingtwo_id_baru_ditambahkan"       // cara 1
getheadingtwo[0].setAttribute("id","headingtwo_id_baru_ditambahkan")        // cara 2

getheadingtwo[0].style.color="red";


// menambahkan elemen ke DOM tree

// menambahkan elemen dgn tag <p> dan value "Ini adalah teks baru" ke DOM tree
// langkah 1 : buat node di dom tree
let newText = document.createElement("p");

// langkah 2 : menambahkan value elemen
newText.innerText = "Ini adalah teks baru";

// langkah 3 : melakukan append (di akhir parent)
getheadingtwo[0].append(newText);

//  kalau di awal parent : prepend

// menambahkan elemen dgn tag <p> dan value "status : lajang" ke DOM tree : id = biodata
let status_biodata = document.createElement("p");

status_biodata.innerHTML="<b>Status</b> : lajang";
biodata.append(status_biodata);

// menambahkan beberapa anggota
anggota_kelompok4 = [
    "Bostang Palaguna",
    "Tito Alexsta",
    "Jeremy Christoper",
    "Muhammad Arya",
    "Andrew",
    "Rizky Rahman"
]

let anggota = document.getElementById('daftar-anggota')

console.log(anggota);


function tambah_anggota() {
   for (let i = 0;i<anggota_kelompok4.length;i++)
    {
        // buat elemen 'p'
        new_anggota = document.createElement('p')

        // assign nilai ke elemen
        new_anggota.innerHTML=`<li>${anggota_kelompok4[i]}</li>`

        // nambahin child ke parent 'daftar-anggota'
        anggota.append(new_anggota);
    } 
}

tambah_anggota()

// anggota.remove(); // menghapus semua


// event listener
let getButton = document.getElementById('button-aksi');
getButton.addEventListener("click", () => {alert("aku tertekan")}); // callback

// getButton.addEventListener("click", tambah_anggota()); // callback

/*********** UBAH PROPERTI GAMBAR ************/

// mengubah properti gambar
const logoRakamin = document.getElementById('logo-rakamin');
logoRakamin.setAttribute('src','./assets/logo_rakamin.png');

// fungsi untuk ubah ukuran
function ubahUkuran(img,new_size) {
    img.setAttribute('width',new_size);
}

let buttonUbahUkuranLogo = document.getElementById('button-ubah-ukuran-logo-rakamin');

// ❌tidak akan berhasil, karena harus berupa callback function
// buttonUbahUkuranLogo.addEventListener("click", ubahUkuran(logoRakamin, "300"));

// ✅berhasil
buttonUbahUkuranLogo.addEventListener("click", ()=>{ubahUkuran(logoRakamin, "300")});
