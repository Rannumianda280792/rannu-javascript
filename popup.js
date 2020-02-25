alert('hello world');
alert('nama saya');
alert('Rannu Mianda');

var alamat = prompt("Masukan Alamat anda : ");
alert("alamat anda " + alamat);
console.log("sebelum di revisi alamat yang dimasukan adalah " + alamat);

var lagi = confirm('mohon lengkapi alamat ' + alamat + ' anda, tekan OK untuk perubahan');

while (lagi) {
    alamat = prompt('isikan kembali alamat anda : ');
    alert('terimakasih, data telah dirubah, cek di console');
    console.log("setalah di revisi,alamat yang dimasukan adalah " + alamat);
    lagi = confirm('lakukan kembali inputan?');
}
alert('terimakasih');
console.log("tidak ada perubahan pada alamat");