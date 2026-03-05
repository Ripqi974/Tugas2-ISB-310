// generate tanggal
for(let i=1;i<=31;i++){
document.getElementById("tanggal").innerHTML+=`<option value="${i}">${i}</option>`;
}

// bulan
const bulan=[
"Januari","Februari","Maret","April","Mei","Juni",
"Juli","Agustus","September","Oktober","November","Desember"
];

bulan.forEach((b,i)=>{
document.getElementById("bulan").innerHTML+=`<option value="${i+1}">${b}</option>`;
});

// tahun
for(let i=1950;i<=2024;i++){
document.getElementById("tahun").innerHTML+=`<option value="${i}">${i}</option>`;
}

// fungsi hitung garis hidup
function hitungGarisHidup(){

let tgl=document.getElementById("tanggal").value;
let bln=document.getElementById("bulan").value;
let thn=document.getElementById("tahun").value;

// gabungkan semua angka
let gabung=tgl+bln+thn;

// jumlah semua digit
let hasil1=0;
for(let i=0;i<gabung.length;i++){
hasil1+=parseInt(gabung[i]);
}

// reduksi sampai 1 digit
let hasil2=hasil1;
while(hasil2>9){
hasil2=hasil2.toString().split('').reduce((a,b)=>a+parseInt(b),0);
}

// tampilkan
document.getElementById("outTanggal").innerText=tgl;
document.getElementById("outBulan").innerText=bln;
document.getElementById("outTahun").innerText=thn;
document.getElementById("hasil1").innerText=hasil1;
document.getElementById("hasil2").innerText=hasil2;
document.getElementById("hasilAkhir").innerText=hasil2;

tampilkanDeskripsi(hasil2);

}

// deskripsi garis hidup
function tampilkanDeskripsi(angka){

let teks="";

switch(angka){

case 1:
teks="Pemimpin alami, mandiri dan percaya diri.";
break;

case 2:
teks="Diplomatis, penyayang dan mudah bekerja sama.";
break;

case 3:
teks="Kreatif, ekspresif dan suka bersosialisasi.";
break;

case 4:
teks="Disiplin, pekerja keras dan bertanggung jawab.";
break;

case 5:
teks="Petualang, suka kebebasan dan perubahan.";
break;

case 6:
teks="Peduli keluarga, penyayang dan empati tinggi.";
break;

case 7:
teks="Analitis, suka berpikir mendalam dan spiritual.";
break;

case 8:
teks="Ambisius, fokus pada kesuksesan dan materi.";
break;

case 9:
teks="Humanis, bijaksana dan suka membantu orang lain.";
break;

}

document.getElementById("deskripsi").innerHTML=
`<h2>Tanggal Lahir Anda Berada Pada Garis Hidup ${angka}</h2>
<p>${teks}</p>`;

}