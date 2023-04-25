// Soal 1
function cetakFunction(){
    return(
        "Hallo Nama saya Boy"
    )
}

console.log(cetakFunction())

// Soal 2
function myFunction(){
    return angka1 + angka2
}

let angka1 = 20

let angka2 = 7

let output = myFunction(angka1, angka2)

console.log(output)

// Soal 3 
const Hello = () => {

    return "Hello"
    
}

console.log(Hello())

// Soal 4
let obj = {

    nama : "john",
    
    umur : 22,
    
    bahasa : "indonesia"
    
}

console.log(obj.bahasa)

// Soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    Nama : "John Doe",
    "Jenis Kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}
console.log(objDaftarPeserta)

// Soal 6
var buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
]

var buahFilter = buah.filter(function(item){
    return item.adaBijinya == false
})
console.log(buahFilter)

// Soal 7
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
const{name, brand, year} = phone
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year)

// Soal 8
let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172
}

// kode diatas ini jangan di rubah atau di hapus sama sekali

let objOutput = {...dataBukuTambahan, ...buku}

// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput)

// Soal 9
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}
    
const functionObject = () => {    
    return mobil
}

console.log(functionObject())