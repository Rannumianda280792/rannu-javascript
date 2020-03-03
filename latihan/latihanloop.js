var kolom = prompt('input jumlah kolom : ');
var baris = prompt('input jumlah baris : ');
var a = '';
for (var i = 1; i <= kolom; i++) {
    for (var j = i; j <= baris; j++) {
        a += '*';
        console.log('Array [ ' + i + ' ], [ ' + j + ' ] = ' + a);


    }
}