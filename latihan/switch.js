var Makanan = prompt('silahkan pilih makanan Anda : ');
switch (Makanan) {
    case 'nasi': //!  di jadikan satu dikarenakan value alert Sama
    case 'Daging':
    case 'susu':
        alert('Makanan SEHAT!'); //!value
        break;
    case 'Softdrink':
    case 'humberger':
        alert('makanan TIDAK SEHAT!');
        break;
    default:
        alert('tidak ada list makanan yang anda pilih');

}