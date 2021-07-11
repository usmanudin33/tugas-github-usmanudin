const prompt = require('prompt-sync')();

var NilaiMasuk = prompt ('masukan nilai ');

var NilaiArray=[];
if (NilaiMasuk) {
    NilaiArray.push(NilaiMasuk);
    var NilaiMasuk = prompt ('masukan nilai lagi ');

    if (NilaiMasuk) {
        NilaiArray.push(NilaiMasuk);
        var NilaiMasuk = prompt ('masukan nilai lagi ');
    
        if (NilaiMasuk) {
            NilaiArray.push(NilaiMasuk);
            var NilaiMasuk = prompt ('masukan nilai lagi ');
    
            if (NilaiMasuk) {
                NilaiArray.push(NilaiMasuk);
                var NilaiMasuk = prompt ('masukan nilai lagi ');
    
                if (NilaiMasuk) {
                    NilaiArray.push(NilaiMasuk);
                } else {
                    console.log('data tidak ada');        
                }
            } else {
                console.log('data tidak ada');        
            }
        } else {
            console.log('data tidak ada');        
        }
    } else {
        console.log('data tidak ada');        
    }
} else {
    console.log('data tidak ada');
}

function NilaiReverse(u) {
    var NilaiArray=[];
    for (var i = u.length -1 ; i > 0; i--) {
        // ada masalah disini, yaitu data yang pertama masuk jadi kehapus karena ada -1
        //tapi jika tidak diberikan -1 data jafi ada yang undifined
        NilaiArray += u[i];
    }
    return NilaiArray;
}
console.log(NilaiReverse(NilaiArray));