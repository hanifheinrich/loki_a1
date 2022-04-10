const express = require("express");
const hanif = express.Router();

hanif.use(express.json()); // for parsing application/json
hanif.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//data.json
let cpmks = [
  { course_plan_detail_id: 001, description: "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)" },
  { course_plan_detail_id: 002, description: "Mahasiswa mampu ngoding" },
];
let referensi = [{ course_plan_id: 001, tittle: "Beginning PHP 5.3", author: "Matt Doyle", publisher: "Wrox", year: 2009, decription: "" }];

//Bagian Hanif Izza Pratama 9-13
//9 Dosen dapat menambah CPMK mata kuliah
hanif.post("/cpmk", function (request, response) {
  course_plan_detail_outcomes.push(request.body);
  response.send(course_plan_detail_outcomes);
});
//10 Dosen dapat mengubah CPMK mata kuliah
hanif.put("/cpmk/:course_plan_detail_id", function (request, response) {
  const course_plan_detail_id = request.params.course_plan_detail_id;
  cpmks.filter((cpmk) => {
    if (cpmk.course_plan_detail_id == course_plan_detail_id) cpmk.course_plan_detail_id = course_plan_detail_id;
    cpmk.description = request.body.description;
    return cpmk;
  });
  response.json(cpmks);
});
//11 Dosen dapat menghapus CPMK mata kuliah
hanif.delete("/cpmk/:deleteId", function (request, response) {
  let id = request.params.deleteId;
  cpmks = cpmks.filter((cpmk) => cpmk.course_plan_detail_id != id);
  response.send(cpmks);
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
