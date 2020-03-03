var banyak_angkot = prompt('input banyak angkot : ');
for (var i = 1; i <= banyak_angkot; i++) {
    if (i <= 6) {
        console.log('Angkot No. ' + i + ' Beroperasi dengan baik');
    } else if (i == 8 || i == banyak_angkot) {
        console.log('Angkot No. ' + i + ' Lembur');
    } else {
        console.log('Angkot No. ' + i + ' Sedang tidak beroperasi');
    }
}