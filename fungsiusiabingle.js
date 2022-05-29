function usiaPengguna (usia) {
if (usia< 13) {return "maaf, usia anda di bawah ketentuan pengguna";}
else if (usia === undefined) {return "mohon masukkan angka usia anda";}

else {return "silahkan lanjut registrasi"}}

console.log (usiaPengguna(1))
console.log (usiaPengguna(50))
console.log (usiaPengguna())