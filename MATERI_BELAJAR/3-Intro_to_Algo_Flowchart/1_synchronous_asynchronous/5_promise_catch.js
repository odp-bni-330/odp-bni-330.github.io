// to do list : tambahkan pengecekan role

const username_correct = 'bostang'
const password_correct = 'pass123'

let user_existing = {
    username: username_correct,
    password : password_correct,
    role : 'admin'
}

function loginUser(username, password) {
    // Promise -> class
    // class instantiation 👇
    return new Promise((resolve,reject) =>{
        // jika user sama (1 step login berhasil), maka resolve
        if (username === username_correct && password === password_correct)
        {
            console.log('berhasil login!');   
            resolve(user_tebakan); // return value yang akan dilempar ke fungsi cekRole
        }
        else   
            reject('Username atau password salah');
    })
}

function cekRole(data_user) {
    return new Promise((resolve,reject)=>{
        console.log("cek role dari:",data_user);
        
        if (data_user.role === 'admin')
            resolve('Dashboard admin');
        else if (data_user.role === 'user')
            resolve('Halaman belanja');
        else
            reject('Role tidak sesuai');
    })
}

// function invoke
username_tebak = 'bostang'
password_tebak = 'pass123'
// role_tebak = 'admin'     // resolve : dashboard admin
// role_tebak = 'user'      // resolve : halaman belanja
role_tebak = 'user1'     // reject : role tdk sesuai

user_tebakan = {
    username : username_tebak,
    password : password_tebak,
    role : role_tebak
}

loginUser(username_tebak,password_tebak)
    // untuk menangani kasus resolve
    .then(return_value =>{
        // console.log(return_value);
        
        // lempar hasil dari resolve loginUser ke cekRole (return)
        return cekRole(return_value);
    })
    .then(akses_halaman =>{
        console.log(akses_halaman);
        
    })
    .catch((error) => {
        console.log("Error:", error);
    });