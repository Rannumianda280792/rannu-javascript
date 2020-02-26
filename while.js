var tulisan = prompt('masukan tulisan yang di inginkan : '),
    jumlahcetak = prompt('masukan jumlah yang akan di tampilkan : '),
    cetak = confirm('cetak tulisan ' + tulisan + ' sebanyak ' + jumlahcetak + '?');
alert('tulisan telah dicetak pada console');

var temp = 1;
while (temp <= jumlahcetak) {
    console.log(tulisan + ' ke ' + temp);
    temp = 1 + temp; // * otomatis akan bertambah 1 nilai dari variabel temp

}
console.log('=================');
var ulang = true;
while (ulang) { // !ini adalah perulangan value Defulth "true"
    console.log('Hello World!!');
    ulang = confirm('ulangi kembali?'); // ? ulangi atau tidak?
    console.log('terimakasih'); // todo 
}