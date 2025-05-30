// DESKRIPSI : menggunakan metode resolve_reject untuk mencegah callback hell dalam contoh kasus login dan belanja

/**************************************** Deklarasi Konstanta ****************************************/
// username dan password masukan akan diperiksa terhadap kesamannya dengan user1
let user1 = {
    username: "bostang03",
    password: "verystrongpassword123",
    role: "admin"
}
/*****************************************************************************************************/

/**************************************** Deklarasi & Definisi Fungsi ****************************************/
// fungsi promise untuk mengecek username & password
function checkUserPassword(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Cek login untuk:", username, password);

        if (user1.username === username) {
            if (user1.password === password) {
                let greeting = `Selamat datang ${user1.username}`;
                resolve(greeting);
            } else {
                reject("PASSWORD atau username salah");
            }
        } else {
            reject("USERNAME atau password tidak ditemukan");
        }
    });
}

// fungsi promise untuk mengecek role
function checkUserRole(role) {
    return new Promise((resolve, reject) => {
        if (user1.role === role) {
            let roleInfo = `Role anda adalah ${user1.role}`;
            resolve(roleInfo);
        } else {
            reject("Role tidak cocok");
        }
    });
}

// fungsi promise untuk menentukan dashboard
function dashboard(role) {
    return new Promise((resolve) => {
        if (user1.role === role) {
            resolve("Selamat datang di Dashboard Admin");
        } else {
            resolve("Selamat berbelanja");
        }
    });
}

// fungsi utama untuk login dengan .then() chaining
function login(username, password, role) {

    checkUserPassword(username, password)
        .then((greeting) => {
            console.log(greeting);
            return checkUserRole(role);
        })
        .then((roleInfo) => {
            console.log(roleInfo);
            return dashboard(role);
        })
        .then((dashboardType) => {
            console.log(dashboardType);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

/**************************************** Alur utama (Function Invoke) ****************************************/
username_tebakan = "bostang03"
password_tebakan = "verystrongpassword123"

login(username_tebakan, password_tebakan, "admin");
/**************************************************************************************************************/
