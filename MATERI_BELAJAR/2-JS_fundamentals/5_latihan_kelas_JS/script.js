// SOAL 1
function resultLuasSegitiga(alasSegitiga, tinggiSegitiga)
/*  Deskripsi : Menghitung luas segitiga
 *  Input     : alasSegitiga : number, tinggiSegitiga : number
 */
{
    return 0.5 * alasSegitiga * tinggiSegitiga;
}

// SOAL 2
function hitungPanjangString(inputString)
/*
 * Deskripsi : Menghitung panjang string
 * Input : inputString : string 
 */
{
    return inputString.length
}

console.log(hitungPanjangString("Selamat Pagi Peserta ODP BNI"));

// SOAL 3
function minuteToHours(menit_awal)
/**
 * Deskripsi : mengonversi menit ke JAM:MENIT
 * Input : menit_awal : integer
 */
{
    let hour = Math.floor(menit_awal / 60)
    let sisa_menit = menit_awal % 60

    // menambahkan angka nol (0) di depan apabila satu digit
    if (sisa_menit < 10)
            sisa_menit = "0"+sisa_menit
    if (hour < 10)
            hour = "0"+hour
    return hour+":"+sisa_menit
}

// SOAL 4
function splitDigitPuluhanSatuan(angka2Digit)
/**
 * Deskripsi : Mengembalikan digit puluhan dan satuan dari angka 2 digit
 * Input : angka2Digit : integer
 */
{
    puluhan = Math.floor(angka2Digit/10)
    satuan = angka2Digit%10
    return [puluhan, satuan]
}

// SOAL 5
function min2SimilarNumber(num1, num2, num3)
/**
 * Deskripsi : mengembalikan trua apabila >= 2 angka masukan sama
 */
{
    if ((num1===num2)||(num1==num3)||(num2==num3))
        return true
    return false
}

function testCase(p1=true,p2=true,p3=true,p4=true,p5=true)
{
    if (p1) console.log(resultLuasSegitiga(3,4));
    if (p2) console.log(hitungPanjangString("Selamat Pagi Peserta ODP BNI"));
    if (p3) console.log(minuteToHours(135));
    if (p4) console.log(splitDigitPuluhanSatuan(95));
    if (p5){
    console.log(min2SimilarNumber(5,5,7));
    console.log(min2SimilarNumber(5,5,5));
    console.log(min2SimilarNumber(1,2,3));
    }
}

testCase();