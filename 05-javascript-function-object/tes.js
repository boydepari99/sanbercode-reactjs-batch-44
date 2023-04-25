var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"}, 
    {merk: "toyota", warna: "hitam", tipe: "box"}, 
    {merk: "audi", warna: "biru", tipe: "sedan"}
    ]

// forEach
mobil.forEach(function(tes){
    console.log("warna : " + tes.tipe)
})

// Map
var arrayWarna = mobil.map(function(item){
    return item.warna
})
console.log(arrayWarna)

// Filter
var arrayFilter = mobil.filter(function(item){
    return item.tipe == "sedan", item.warna == "merah"
})
console.log(arrayFilter)

//ES6 Destructuring
const {merk, warna, tipe} = mobil[0]

console.log(merk)

// Spread Operator
let person = {
    nama : "Boy",
    usia : "23"
}

let newPerson = {...person, hobi : "sepak bola"}

console.log(newPerson)

// ES6 Enhanced object literals
const fullName = "Boy Aribana"
const Boy = {fullName}

console.log(Boy)