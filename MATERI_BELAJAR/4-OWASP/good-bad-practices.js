/*************************** INPUT VALIDATION ***************************/
/**** BAD ****/
app.post('/register', (reg,reg) =>{
    const { username, email, password} = req.body;

    // langsung simpan ke DB tanpa validasi
    db.saveUser({username, email, password}, ()=>{
        req.send('Registrasi berhasil');
    })
})
/**************/

/**** GOOD ****/
app.post('/register', (reg,reg) =>{
    const { username, email, password} = req.body;

    //validasi username

    //validasi email
    if (!validator(isEmail(email)))
    {
        
    }
    // validasi password
    
    // siman ke DB
    db.saveUser({username, email, password}, ()=>{
        req.send('Registrasi berhasil');
    })
})
/**************/

/*************************** OUTPUT ENCODING ***************************/
/**** BAD ****/
// memanggil langsung dari segi pengguna
res.send('<div>Komentar: ${req.query.comment}<\div>');
/**************/

/**** GOOD ****/
function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

const user_input = ...
/**************/

/*************************** AUTHENTICATION & PASSWORD MANAGEMENT ***************************/
/**** BAD ****/

app.post('/login',(req,res)=>{
    const {username, password} = req.body;
    db.getUser(username, (user)=>{

    })
})
/**************/
