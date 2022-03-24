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

app.listen(3000, function () {
  console.log("server sedang berjalan");
});
