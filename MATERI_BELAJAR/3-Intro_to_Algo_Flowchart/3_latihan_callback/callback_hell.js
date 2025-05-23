// DESKRIPSI : menggunakan metode callback hell untuk mencegah callback hell dalam contoh kasus login dan belanja

/**************************************** Deklarasi Konstanta ****************************************/
// username dan password masukan akan diperiksa terhadap kesamannya dengan user1
let user1 = {
    username: "bostang03",
    password: "verystrongpassword123",
    role: "admin"
}
/*****************************************************************************************************/

/**************************************** Deklarasi & Definisi Fungsi ****************************************/
// fungsi untuk mengecek username & password
function checkUserPassword(username, password, cb) {
    console.log("Cek login untuk:", username, password);

    if (user1.username === username) {
        // console.log("Username ada");

        if (user1.password === password) {
            let greeting = `Selamat datang ${user1.username}`;
            cb(greeting);
        } else {
            console.log("invalid");
        }
    } else {
        console.log("Username tidak ada");
    }
}

// fungsi untuk mengecek role
function checkUserRole(role, cb) {
    if (user1.role === role) {
        let roleInfo = `Role anda adalah ${user1.role}`;
        cb(roleInfo);
    }
}

// fungsi untuk menentukan dashboard
function dashboard(role, cb) {
    if (role === "admin") {
        let dashboardType = "Selamat datang di Dashboard Admin";
        cb(dashboardType);
    } else {
        let dashboardType = "Selamat berbelanja";
        cb(dashboardType);
    }
}

// fungsi utama login (dengan callback hell)
function login(username, password, role) {
    checkUserPassword(username, password, function (greeting) {
        console.log(greeting);
        checkUserRole(role, function (roleInfo) {
            console.log(roleInfo);
            dashboard(role, function (dashboardType) {
                console.log(dashboardType);
            });
        });
    });
}

/*************************************************************************************************************/

/**************************************** Alur utama (Function Invoke) ****************************************/
username_tebakan = "bostang03";
password_tebakan = "verystrongpassword123";

login(username_tebakan, password_tebakan, "admin");
/**************************************************************************************************************/
