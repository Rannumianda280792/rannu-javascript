function hasil(a) {
    var jumlah = 0;
    for (var i = 0; i < arguments.length; i++) { //! Varibel arguments adalah varibel semu tidak kelihatan namun ada
        jumlah += arguments[i];
    }
    return jumlah;
}
var cetak = hasil(2, 4, 4); //! argument nya ada 3 value namun dikirim ke parameter kosong, parameter akan membaca sebagai arguments
console.log(cetak);
//! argument dan arguments tidak sama , 
//! Argument adalah value yang dikirim  pada parameter dengan jumlah yang sama dan dapat di cetak oleh fungsi
//! arguments adalah value yang dikirim pada parameter yang tidak sesaui jumlah nya dengan parameter dan value yang tidak mendapatkan inisialisasi parameter dapat dikatakan variabel semu.