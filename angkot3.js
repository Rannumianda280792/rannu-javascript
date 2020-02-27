var jumlahangkot = prompt('Jumlah Angkot : ');
var kondisibaik = prompt('')
for (var kondisiangkot = 1; kondisiangkot <= jumlahangkot; kondisiangkot++) {

    if (kondisiangkot <= 6) {
        console.log('angkot No. ' + kondisiangkot + ' beroperasi dengan baik');
    } else { console.log('angkot No. ' + kondisiangkot + ' sedang tidak beroperasi'); }


}