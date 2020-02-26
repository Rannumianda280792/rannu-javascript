var tulisan = prompt('masukan tulisan yang di inginkan : '),
    jumlahcetak = prompt('masukan jumlah yang akan di tampilkan : '),
    cetak = confirm('cetak tulisan ' + tulisan + ' sebanyak ' + jumlahcetak + '?');
alert('tulisan telah dicetak pada console');

var temp = 1;
while (temp <= jumlahcetak) {
    console.log(tulisan + ' ke ' + temp);
    temp = 1 + temp;

}
console.log('=================');
var ulang = true;
while (ulang) {
    console.log('Hello World!!');
    ulang = confirm('ulangi kembali?');
    console.log('terimakasih');
}