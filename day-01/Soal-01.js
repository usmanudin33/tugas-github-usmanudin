

const prompt = require('prompt-sync')();

var nilai = prompt('masukan angka yang akan dijumlahkan : ');
var tempat_nilai = [];
var total_nilai = 0;
 if (nilai) {
     tempat_nilai.push(nilai);
    //  console.log(tempat_nilai);
     var nilai = prompt('masukan angka kedua : ');
     if (nilai) {
         tempat_nilai.push(nilai);
        //  console.log(tempat_nilai);
         var nilai = prompt('masukan nilai ketiga : ');
         if (nilai) {
             tempat_nilai.push(nilai);
            //  console.log(tempat_nilai);
             var nilai = prompt('masukan nilai ke 4 : ');
             if (nilai) {
                 tempat_nilai.push(nilai);
                //  console.log(tempat_nilai);
             } else {
                 console.log("error nilai 4");
             }
         } else {
             console.log("error nilai 3");
         }
     } else {
         console.log("error nilai 2");
     }
 } else {
    console.log("nilai 1");
 }
 function sum(n) {
    for(var i in n){
     total_nilai += n[i];
    }
    return total_nilai;
  
  }
var print=sum(tempat_nilai.map((i) => Number(i)));
console.log(print);


//atau begini,, tapi ngga kejumblah...
var Nilai = prompt('masukan 4 digit angka : ');
var TempNilai = [];
var TotalNilai = 0;
 if (Nilai) {
     TempNilai.push(Nilai);
     console.log(TempNilai);
 }else{
     console.log('error cuy');
 }

function tambah(n) {
    for (var i in n ) {
        TotalNilai += n[i];
        //karena data yang masuk "3456" jadi 1 kolom atau 1 objek kayanya 
        //jadi ngga bisa dijumlahkan..
    }
    return TotalNilai;
}

console.log(tambah(TempNilai.map((i) => Number(i))));

 
 

