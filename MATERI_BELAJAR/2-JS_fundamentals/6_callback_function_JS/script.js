function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
    
}

function greeting(userName) {
    console.log(`selamat siang, ${userName}`);
    
}

fullName("Bostang", "Palaguna");
greeting("Bostang Palaguna");


/******************** Fungsi Callback (synchronous) ********************/
// membuat function callback
function fullNamecb(firstName, lastName, callback) {
    let fullName = `${firstName} ${lastName}`;
    callback(fullName);
    
}

// function invoking
fullNamecb(
    "Bostang",
    "Palaguna",
    function(userName){
    console.log(`[CALLBACK] : selamat siang ${userName}`);
    }
);
/*********************************************************************/

let user1 = {
    username: "bostang03",
    password: "verystrongpassword123",
    role    : "admin"
}



// contoh : login (tanpa callback)
function cekUserPassword(username, password) {
    console.log(username,password);
    
    if (user1.username === username){
        console.log('[BIASA] : username ada');
        
        if (user1.password === password){
            console.log('[BIASA] : Berhasil login');      
        }
        else console.log('[BIASA] : username atau password salah');
    }
    else console.log('[BIASA] : username atau password salah');
} 

// function callback
cekUserPassword("bostang03","verystrongpassword1234")

/*********************************************************************/

// fungsi login dengan callback
function cekUserPasswordcb(username, password, cb) {
    console.log("Cek login untuk:", username, password);
    
    if (user1.username === username) {
        console.log("Username ada");

        if (user1.password === password) {
            cb(null, user1); // null untuk error, user1 sebagai data sukses
        } else {
            cb("Password salah", null);
        }
    } else {
        cb("Username tidak ditemukan", null);
    }
}

// memanggil fungsi login
cekUserPasswordcb(
    "bostang03",
    "verystrongpassword123",
    function (err, dataUser) {
        if (err) {
            console.log("Login gagal:", err);
            return;
        }

        if (dataUser.role === "admin") {
            console.log("Welcome to dashboard admin");
        } else {
            console.log("Welcome to dashboard biasa");
        }
    }
);


/*********************************************************************/

function belanja(uang, hargaBarang, cb) {
    if (uang >= hargaBarang) {
        console.log('Berhasil belanja barang seharga ' + hargaBarang);
        let sisaUang = uang - hargaBarang;
        cb(sisaUang);
    } else {
        console.log('Uang tidak cukup untuk belanja barang seharga ' + hargaBarang);
    }
}

function mulaiBelanja(uang) {
    belanja(uang, 20000, function (sisaUang1) {
        console.log('Sisa uang setelah belanja 1: ' + sisaUang1);
        belanja(sisaUang1, 10000, function (sisaUang2) {
            console.log('Sisa uang setelah belanja 2: ' + sisaUang2);
            belanja(sisaUang2, 8500, function (sisaUang3) {
                console.log('Sisa uang setelah belanja 3: ' + sisaUang3);
            });
        });
    });
}

mulaiBelanja(100000);
