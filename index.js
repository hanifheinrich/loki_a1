const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("Hello Husnil");
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
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 9");
});

//10 Dosen dapat mengubah CPMK mata kuliah
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 10");
});

//11 Dosen dapat menghapus CPMK mata kuliah
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 11");
});

//12 Dosen dapat menambah referensi
app.get("/", function (request, response) {
  response.send("Ini adalah halaman 12");
});

//13 Dosen dapat menambah referensi
app.get("/", function (request, response) {
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

app.listen(3000, function () {
  console.log("server sedang berjalan");
});
