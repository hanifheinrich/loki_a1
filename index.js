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
app.put("/editcpmk/:cpmk", function (request, response) {
  const id = request.params.cpmk;
  response.send(id);
});

//11 Dosen dapat menghapus CPMK mata kuliah
app.delete("/deletecpmk", function (request, response) {
  let obj = {
    message: "Anda berhasil menghapus Capaian Pembelajaran Mata Kuliah",
    code_eror: 0,
  };
  response.json(obj);
});

//12 Dosen dapat menambah referensi
app.get("/addreferensi", function (request, response) {
  const mahasiswa = {
    nim: 2011521023,
    nama: HanifIzzaPratama,
    umur: 19,
  };
});

//13 Dosen dapat mengubah referensi
app.get("/editrefernsi", function (request, response) {
  let obj = {
    message: "Anda berhasil mengubah referensi",
    code_eror: 0,
  };
});

app.listen(3000, function () {
  console.log("server sedang berjalan");
});
