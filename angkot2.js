console.log("======= Hasil solusi Pertama =========");
for (var jumlahangkot = 1; jumlahangkot <= 1; jumlahangkot++) {
    var baik = 1;
    while (baik <= 6) {
        console.log("angkot No. " + baik + " beroperasi dengan baik");
        baik++;
    }
    var tdkbaik = 7;
    while (tdkbaik <= 10) {
        console.log("angkot No. " + tdkbaik + " sedang tidak beroperasi");
        tdkbaik++;

    }
    console.log("====================================");
    console.log(" ");
    console.log("======= Hasil Solusi Kedua =========");
}

var nilaiawal = 1;
var banyakangkot = prompt('Jumlah Angkot Seluruh nya : ');
var beroperasi = prompt('jumlah angkot yang dapat beroperasi : ');

while (nilaiawal <= beroperasi) {
    console.log("angkot No. " + nilaiawal + " beroperasi dengan baik");

    nilaiawal++;

}

for (nilaiawal = + nilaiawal; nilaiawal <= 10; nilaiawal++) {
    console.log("angkot No. " + nilaiawal + " sedang tidak beroperasi");

}
console.log("====================================");
console.log(" ");