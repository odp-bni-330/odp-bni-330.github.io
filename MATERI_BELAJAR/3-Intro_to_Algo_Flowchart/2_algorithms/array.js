// DESKRIPSI : contoh penggunaan array

/********** deklarasi array **********/
const numbers = [11,22,33,44,55,66];

/********** akses elemen array **********/
console.log("elemen pertama:",numbers[0]);    // elemen pertama (indeks = 0)
console.log("panjang array:",numbers.length);
console.log("elemen terakhir",numbers[numbers.length - 1]);    // elemen terakhir (indeks = n-1)

// built-in function array (array method)

let students = ["Andi", "Budi", "Cecep", "Dono", "Eko"];

/********** menambahkan elemen array (CREATE) **********/ 
// menambahkan elemen array di akhir array
students.push("Fajar");
console.log(students);


// menambahkan elemen array di awal array
students.unshift("Zahra","Tania");      // bisa menamnbahkan beberapa elemen secara langsung
console.log(students);

// mengubah elemen array
students[3] = "Budiman"     // Budi -> Budiman
console.log(students);

/********** menghapus elemen array (DELETE) **********/
// Menghapus elemen terkahir array
let student_terhapus = students.pop();     // Fajar dihapus
console.log("siswa terhapus:",student_terhapus);
console.log(students);

//.pop() mengembalikan elemen yang dihapus

// menghapus elemen pertama array
student_terhapus = students.shift();
console.log("siswa terhapus:",student_terhapus);
console.log(students);

/********** looping array **********/
students.forEach((student)=>{console.log(student);
})

// custom
function forEach_me(cb) {
    for (let i = 0;i<students.length;i++)
        cb(students[i])
}

forEach_me((student)=>{console.log(student);
})

// map function
let students_upper = students.map(student => {
    return student.toUpperCase();
})

console.log(students_upper);

/********** array split **********/
let anggota_string = "Bostang,Tito,Arya,Chris,Andrew,Rizky";
anggota_array = anggota_string.split(",");
console.log(anggota_array);

// membalik elemen array
let contoh_kata = "Berjibaku"
let contoh_kata_array = contoh_kata.split("");
let contoh_kata_array_balik = contoh_kata_array.reverse();

// menggabungkan array of string(s) menjadi satu buah string
let contoh_kata_balik = contoh_kata_array_balik.join("");
console.log(contoh_kata_balik);

/********** Method Chaining **********/
console.log(contoh_kata.split("").reverse().join(""));

/********** Array splicing **********/
// syntex : array.splice(index, [count, item1, item2, ...])

let students2 = ["Andi", "Budi", "Cecep", "Dono", "Eko"];

console.log(students2);

/********** menyisipkan elemen **********/
students2.splice(1,0, "Fathya");
console.log(students2);

/********** menukar elemen **********/
students2.splice(2,1, "Radit");
console.log(students2);
