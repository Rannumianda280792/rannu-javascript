var banyak_angkot = prompt('input banyak angkot : ');
for (var i = 1; i <= banyak_angkot; i++) {
    if (i <= 6) {
        if (i === 5) { //! ===  membandingkan tipe data variabel dan value yang sama
            console.log('Angkot No. ' + i + ' sedang Lembur');
        } else {
            console.log('Angkot No. ' + i + ' Beroperasi dengan baik');
        }

    } else if (i == 8 || i == banyak_angkot) {
        console.log('Angkot No. ' + i + ' sedang Lembur');
    } else {
        console.log('Angkot No. ' + i + ' Sedang tidak beroperasi');
    }
}