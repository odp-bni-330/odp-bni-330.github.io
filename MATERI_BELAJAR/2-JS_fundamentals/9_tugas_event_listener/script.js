// Membuat objek untuk tiap-tiap id
let getButtonValue = document.getElementById('button-value');
let getHeaderID = document.getElementById('header-id');
let getbody = document.getElementsByTagName('body')[0];

getButtonValue.addEventListener("click", () => {
    const inputValue = document.getElementById('textInput').value;
    
    // menambahkan ke body elemen p
    let add_text = document.createElement('p');
    add_text.innerHTML = "Halo, "+inputValue+"!";
    getbody.append(add_text);

    // mengubah warna h1
    getHeaderID.style.color="red";
}); // callback