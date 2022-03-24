const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", function (request, response) {
  response.send("Hello Pak Husnil");
});

app.get("/home", function (request, response) {
  response.send("Ini adalah halaman home");
});

app.get("/login", function (request, response) {
  response.send("Ini adalah halaman buat login");
});

app.get("/login/halamanberanda", function (request, response) {
  response.send("Anda telah berhasil login");
});

//Bagian Hanif Izza Pratama 9-13
//9 Dosen dapat menambah CPMK mata kuliah
app.get("/addcpmk", function (request, response) {
  let obj = {
    message: "Anda berhasil menambahkan Capaian Pembelajaran Mata Kuliah",
    code_eror: 0,
  };
  response.json(obj);
});

//10 Dosen dapat mengubah CPMK mata kuliah
app.get("/editcpmk", function (request, response) {
  response.send("Ini adalah halaman 10");
});

//11 Dosen dapat menghapus CPMK mata kuliah
app.delete("/deletecpmk/", function (request, response) {
  response.send("Ini adalah halaman 11");
});

//12 Dosen dapat menambah referensi
app.get("/addreferensi", function (request, response) {
  response.send("Ini adalah halaman 12");
});

//13 Dosen dapat mengubah referensi
app.get("/editrefernsi", function (request, response) {
  response.send("Ini adalah halaman 13");
});

//Bagian dzul fauzi 14-18
//14 Dosen dapat menghapus referensi
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 14");
});

//15 Dosen dapat menambah komponen penilaian
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 15");
});

//16 Dosen dapat mengubah komponen penilaian
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 16");
});

//17 Dosen dapat menghapus komponen penilaian
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 17");
});

//18 Dosen dapat menambah pertemuan mingguan RPS
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 18");
});

//ini bagian khalil

app.listen(3000, function () {
  console.log("server sedang berjalan");
});
