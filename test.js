// AKTIVITAS 1 - EKSPERIMEN 10+20
let a = "10";
let b = "20";
console.log(a + b);

// AKTIVITAS 2 - MENEMUKAN TIPE DATA
let nama = "Asep";
let umur = 16;
console.log(typeof nama);
console.log(typeof umur);

// AKTIVITAS 3 - KONVERSI STRING MENJADI NUMBER
let x = "10";
let y = "20";
let hasil = Number(x) + Number(y);
console.log(hasil);

// AKTIVITAS 4 - PROGRAM KASIR SEDERHANA
let hargaBarang = Number(prompt("Masukkan harga: "));
let jumlahBarang = Number(prompt("Masukkan jumlah: "));
let totalBelanja = hargaBarang * jumlahBarang;
console.log("Total belanja = " + totalBelanja);

// AKTIVITAS 5 - TANTANGAN
let tugas = Number(prompt("Masukkan nilai tugas"))
let UTS = Number(prompt("Masukkan nilai UTS"))
let UAS = Number(prompt("Masukkan nilai UAS"))

let ratarata = (tugas + UTS + UAS) /3;
console.log("Nilai rata-rata Anda: " + ratarata);