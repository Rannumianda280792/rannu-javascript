var jumlah_angkot = prompt('jumlah Angkot Oprasional : ');
console.log('Jumlah Angkot saat ini ' + jumlah_angkot + ' Unit');
console.log('===========================================');
let baik = 0;
let Perbaikan = 0;
for (var i = 1; i <= jumlah_angkot; i++) {
    var tanya = confirm('angkot No ' + i + ' kondisi baik ? ');
    if (tanya === true) {
        console.log('Angkot no ' + i + ' beroperasi dengan baik ');
        baik++;

    } else {
        console.log('Angkot no ' + i + ' sedang dalam Perbaikan ');
        Perbaikan++;

    }
}
console.log('===============================================');
console.log('Unit Angkot Dalam Keadaan Baik : ' + baik);
console.log('Unit Angkot Dalam Perbaikan : ' + Perbaikan);