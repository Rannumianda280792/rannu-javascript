alert('Permainan Tebak Angka(1-10)\n 3 kali kesempatan');
var p = prompt("Angka tebakan Anda : ");
var acak = Math.random();
if (p > 10) {
    p = prompt('angka yang anda masukan salah,\n silahkan masukkan angka (1-10):');
}

console.log(acak);
var comp;
if (acak >= 0 && acak <= 0.1) {
    comp = 1;
} else if (acak > 0.1 && acak <= 0.2) {
    comp = 2;
} else if (acak > 0.2 && acak <= 0.3) {
    comp = 3;
} else if (acak > 0.3 && acak <= 0.4) {
    comp = 4;
} else if (acak > 0.4 && acak <= 0.5) {
    comp = 5;
} else if (acak > 0.5 && acak <= 0.6) {
    comp = 6;
} else if (acak > 0.6 && acak <= 0.7) {
    comp = 7;
} else if (acak > 0.7 && acak <= 0.8) {
    comp = 8;
} else if (acak > 0.8 && acak <= 0.9) {
    comp = 9;
} else if (acak > 0.9 && acak <= 1) {
    comp = 10;
}

for (var i = 2; i > 0; i--) {
    if (p == comp) {
        alert('Anda benar!! \n Tebakan anda tepat Di angka ' + comp);
        i = 0;
    } else if (p > comp) {
        p = prompt('angka anda Besar,tinggal ' + i + ' kesempatan Lagi  \n silahkan input kembali ');
    } else {
        p = prompt('angka anda Kecil ' + i + ' kesempatan Lagi \n silahkan input kembali ');
    }
}