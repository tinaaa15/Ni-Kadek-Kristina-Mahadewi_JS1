/*if, else, nested if*/

let nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("D");
}

/*switch case*/

let buah = "Apel";

switch (buah) {
    case "Jeruk":
        console.log("Ini buah Jeruk");
        break;
    case "Semangka":
        console.log("Ini buah Semangka");
        break;
    case "Apel":
        console.log("Ini buah Apel");
        break;
    case "Pisang":
        console.log("Ini buah Pisang");
        break;
    default:
        console.log("Nama buah tidak dikenal.");
}

/*for statement*/

for (let x = 0; x < 5; x++) {
    console.log("Bilangan ke-" + (x + 1));
}

/*while, do while*/

let a = 1;

while (a <= 3) {
    console.log("Angka : " + a);
    a++;
}

/*function*/

// Mendefinisikan sebuah fungsi bernama 'sapa'
function sapa() {
    console.log("Hai, Selamat Datang!");
    console.log("Semangat belajar Jacascript");
}

// Memanggil fungsi 'sapa'
sapa();

