// Deskripsi : Demonstrasi fungsi di javascript
function totalNumber(num1, num2) {  // menerima 2 parameter
    return num1+num2;
}

function divideNumber(num1, num2) {  // menerima 2 parameter
    return num1/num2;
}

function totalNumber2(num1, num2, num3 = 7) {  // menerima 2 parameter
    return num1+num2+num3;
}

// code invoke (memanggil fungsi)
console.log(totalNumber(1,2));  // menerima 2 argumen

console.log(divideNumber(num2=3,num1=4));

console.log(totalNumber2(2,3));

// function expression
const numberTimes = function (num1, num2) {
    return num1*num2;
}

console.log(numberTimes(3,4));

try {
    console.log(numberTimes(3));    // not a number
    
} catch (error) {
    console.log(error); 
}

// template literal
function greeting(firstname, lastname) {
    console.log(`Halo selamat pagi ${firstname} ${lastname}`); // harus menggunakan back-tick, tidak bisa ' atau ""
    
}

greeting("Bostang","Palaguna");

// infinte function call

// function test() {
//     console.log(`abc`);
//     console.log(`${test()}`);
// }

// test();

// Arrow function
const greetingArrow = (name) => {
    return `Halo selamat siang ${name}`;
}

console.log(greetingArrow("Bostang Palaguna"));

// arrow function tanpa parameter
const FunctionArrow1 = () => {
    return `Halo selamat siang!`;
}

console.log(FunctionArrow1);
console.log(FunctionArrow1());
