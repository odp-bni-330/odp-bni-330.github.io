/**************************************** Deklarasi Konstanta ****************************************/
let user1 = {
    username: "bostang03",
    password: "verystrongpassword123",
    role    : "admin"
}
/*****************************************************************************************************/


/**************************************** Deklarasi & Definisi Fungsi ****************************************/
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
/***************************************************************************************************************/

/**************************************** Alur utama (login lalu belanja) ****************************************/

/**
 * Alur:
 *  login   ->      mulai belanja
 */

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
            
            // function callback untuk ke belanja
            mulaiBelanja(100000);

        }
    }
);
