// DESKRIPSI : Contoh penggunaan Asynchronous arrow function untuk login

user1 = {   // 1 buah user existing
  user: 'user1',
  password : 'pass123'
}

const login = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username dan password harus diisi!");
  }
  if (username != user1.user || password != user1.password) {
    throw new Error("Username dan password tidak tepat!");
  }
  return { username, token: "abc123" }; // Simulasi respons sukses
};

// Pemanggilan

user_tebak = "user1"
password_tebak = "pass123"

/*
// kasus : error karena password dan user tidak tepat
user_tebak = "user2"
password_tebak = "pass123"
*/

/*
// kasus : error karena password dan user tidak diisi
let user_tebak = undefined
let password_tebak = undefined
*/

// Function Invoke (mulai proses login)
login(user_tebak, password_tebak)
  .then(user => console.log("Login sukses:", user))
  .catch(err => console.log("Login gagal:", err.message));