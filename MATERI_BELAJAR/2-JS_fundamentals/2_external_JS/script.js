// menampilkan ke log
console.log("Ini adalah teks");     // 1 buah statement


// Importing the OS Module
const os = require('os'); 

// Retrieving System Information
// System Architecture
const type = os.type();
console.log(`OS Type: ${type}`);

// Platform
const platform = os.platform();
console.log(`Platform: ${platform}`); // Output: linux, darwin, win32, etc.

// system memory
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory} bytes`);
console.log(`Free Memory: ${freeMemory} bytes`);

// user info
const userInfo = os.userInfo();
console.log(userInfo);

// Network interface
const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

// host name
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

/*  catatan : 
The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done, and the types must be the same to be considered equal.
*/

// cara menjalankan :
//  node <nama_file>
// contoh : node script.js

// catatan : pwd (print working directory) harus sama. Apabila masih belum, cd (change directory) ke directory lokasi file JS-nya.