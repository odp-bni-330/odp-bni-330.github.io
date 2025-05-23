// DESKRIPSI : Demonstrasi Synchronous vs Asynchronous

// Deklarasi Variabel
let username = "bostang"
let greeting = "Selamat pagi!"

/********* Synchronous *********/

// Menampilkan Variabel
console.log(username);
console.log(greeting);
/*******************************/

/********* Asynchronous *********/
console.log("LINE 15");
// syntax: setTimeout(cbfunction, timeout(ms))
setTimeout(() => {
    console.log("LINE 18");    
}, 500);       // delay 1 detik
console.log("LINE 20");


console.log("LINE 23");
// syntax: setTimeout(cbfunction, timeout(ms))
setTimeout(() => {
    console.log("LINE 26");         // akan lebih dulu dari line 18 (karena delay lebih singkat)
}, 0);       // delay 0 detik
console.log("LINE 28");
/*******************************/

// observasi : semua synchronous akan dijalankan semua : line : 15->20->23->28
//              setelah itu asynchronous dijalankan berdasarkan timeout tersingkat 26->18