// Soal 1
for(var number = 0; number < 10; number++){
    console.log(number);
}

// Soal 2
for(var number = 0; number < 10; number++){
    if(number % 2 ==1){
        console.log(number);
    }else{
        console.log();
    }
}

// Soal 3
for(var number = 0; number < 10; number++){
    if(number % 2 ==0){
        console.log(number);
    }else{
        console.log();
    }
}

// Soal 4
let array1 = [1,2,3,4,5,6]

console.log(array1[5]);

// Soal 5
let array2 = [5,2,4,1,3,5]

array2.sort()
console.log(array2)

// Soal 6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for(var i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// Soal 7
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

for(i = 0; i < array4.length ; i++){
    if(i%2==1){
        console.log(array4[i])
    }else{
        console.log()
    }
}

// Soal 8
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]

let gabung= kalimat.join(" ")
console.log(gabung)

// Soal 9
var sayuran=[]

sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
console.log(sayuran)