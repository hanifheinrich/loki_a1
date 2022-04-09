const express = require("express");
const hanif = express.Router();

hanif.use(express.json()); // for parsing application/json
hanif.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//data.json
let mahasiswa = [{ nama: "Hanif Izza Pratama", nim: 2011521023, umur: 19 }];
let referensi = [{ course_plan_id: 001, tittle: "Beginning PHP 5.3", author: "Matt Doyle", publisher: "Wrox", year: 2009, decription: "" }];

//Bagian Hanif Izza Pratama 9-13
hanif
  .route("/cpmk")
  //9 Dosen dapat menambah CPMK mata kuliah
  .post(function (request, response) {
    mahasiswa.push(request.body);
    response.send(mahasiswa);
  })
  //10 Dosen dapat mengubah CPMK mata kuliah
  .put(function (request, response) {
    const id = request.params.cpmk;
    response.send(id);
  })
  //11 Dosen dapat menghapus CPMK mata kuliah
  .delete(function (request, response) {
    let obj = {
      message: "Anda berhasil menghapus Capaian Pembelajaran Mata Kuliah",
      code_eror: 0,
    };
    response.json(obj);
  });

//12 Dosen dapat menambah referensi
hanif.post("/referensi", function (request, response) {
  referensi.push(request.body);
  response.send(referensi);
});

//13 Dosen dapat mengubah referensi
hanif.put("/referensi/:course_plan_id", function (request, response) {
  const course_plan_id = request.params.course_plan_id;
  referensi.filter((referensi) => {
    if (referensi.course_plan_id == course_plan_id) referensi.course_plan_id = course_plan_id;
    referensi.tittle = request.body.tittle;
    referensi.author = request.body.author;
    referensi.publisher = request.body.publisher;
    referensi.year = request.body.year;
    referensi.description = request.body.description;

    return referensi;
  });
  response.json(referensi);
});

module.exports = hanif;
