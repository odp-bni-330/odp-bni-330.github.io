// Deskripsi : Eksplorasi berbagai konsep di JS

// variabel
let full_name = "Bostang Palaguna";
console.log("nama lengkap:",full_name);

var x = 3;
for (let i = 0;i<10;i++)
{
    console.log(x);
    x++;
}

// nama variabel yang masih valid
let _username = "bostang";
let $username = "bostang";

console.log("_username:",_username);
console.log("$username:",$username);

// deklarasi dan mencetak array of string
student_collection = [
    "Bostang Palaguna",
    "Tito Alexsta",
    "Arya Revansyah",
    "Andrew",
    "Jeremy Nathanael",
    "Rizky Rahman"
];

for(let index = 0;index<student_collection.length;index++)
{
    console.log(index+". "+student_collection[index]);
}

// assign nilai sebelum dan setelah pemanggilan
let Role;
console.log("Role:",Role);
Role = 'Programmer';
console.log("Role:",Role);

// contoh hoisting : assign nilai sebelum deklarasi
variabelHosting = 7;
var variabelHosting = 8;
console.log(variabelHosting);

// Tipe Data
let user_1 = 'Bostang'; // string   -> preferable
let user_2 = "Palaguna"; // string
let user_3 = `Sihombing`; // string

let usia_user = 22 // integer
let pi = 3.14   // numeric

// nilai maksimal integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER+"");
console.log(typeof(Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER));

console.log(Number.MAX_SAFE_INTEGER**Number.MAX_SAFE_INTEGER); // infinity
console.log(Number.MAX_SAFE_INTEGER**Number.MAX_SAFE_INTEGER/0); // infinity
console.log("a", Number.MAX_SAFE_INTEGER**Number.MAX_SAFE_INTEGER*0); // infinity

// Mengecek tipe data
console.log(typeof(usia_user));
console.log(typeof(pi));

// string concatenation
console.log("28"+22);

try {
  console.log("28"-22);
}
catch(err) {
  console.log("error!");
}

let var1 = null;
let var2 = undefined;   // sama dengan let var2;

// truthy
    // bilangan selain nol
    // true

// falsy
    // ""
    // false
    // undefined
    // null
    // NaN

if (-3)
{
    console.log("true");    // akan dievaluasi sebagai benar karena -3 != 0 -> truthy
}
else
{
    console.log("false");
}

if (undefined)
{
    console.log("defined");    
}
else
{
    console.log("undefined");     // akan dievaluasi sebagai benar
}


if ("")
{
    console.log("defined");    
}
else
{
    console.log("undefined");     // akan dievaluasi sebagai benar
}

try
{
    if (variabel_belum_ada)
    {
        console.log("defined");    
    }
    else
    {
        console.log("undefined");     // akan dievaluasi sebagai benar
    }
}
catch
{
    console.log("error");
    
}

console.log(-3%2);
console.log(7.3278%2.324);

// prefix
let old_var = 4;
let new_var = old_var++;
let new_var_2 = ++old_var;
console.log(old_var++);
console.log("new_var",new_var);
console.log("new_var_2",new_var_2);

// logical operator
let truthValue = true
let truthValue2 = (3 > 2)
let truthValue3 = !truthValue2
console.log(truthValue | truthValue2);
console.log(truthValue || truthValue2);
console.log(truthValue & truthValue2);
console.log(truthValue && truthValue2);
console.log(truthValue3);
console.log(truthValue ^ truthValue2);


/* Catatan:
    var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope)
*/