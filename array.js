let family = ['Medina', 'aesah', 'shanum', 'Mianda'];
//1.methode Array Join
//console.log(family.join('-'));
//2.methode Array Push (menambah Value array di akhir index)
//console.log(family.push('Rannu'));
//3.methode Array Pop (menghapus Value array di akhir index)
//console.log(family.pop());
//4.methode Array Unshift (menambahkan Value array di Awal index)
//family.unshift('rannu');
//4.methode Array Shift (menghapus Value array di Awal index)
//family.shift();
//5.methode Array  splice(menambahkan Value array di manasaja (fleksibel) index),
//structur (indexawal, yangmaudihapus, elementyangditambahkan1,dst)
//family.splice(2, 0, 'rannu'); //! menambahkan kata rannu di index ke-2
//family.splice(1, 2, 'rannu'); //! manambahkan kata rannu pada index ke-1 lalu menghapus 2 index setelah nya

//6.methode Array  slice(Mengambil salah satu atau lebih Value dalam  array di mana saja (fleksibel) dan menyimpan di Variabel array baru),
//(awal,akhir)
var family2 = family.slice(1, 3); //mengambil index Array 1 sampai dengan index array ke-2, dan disimpan ke dalam variabel baru
console.log(family2.join('-'));