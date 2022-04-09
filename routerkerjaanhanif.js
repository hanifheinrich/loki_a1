const express = require("express");
const hanif = express.Router();

//Bagian Hanif Izza Pratama 9-13
hanif
  .route("/cpmk")
  //9 Dosen dapat menambah CPMK mata kuliah
  .post(function (request, response) {
    let obj = {
      message: "Anda berhasil menambahkan Capaian Pembelajaran Mata Kuliah",
      code_eror: 0,
    };
    response.json(obj);
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
hanif
  .route("/referensi")
  .post(function (request, response) {
    //responsejson
    const mahasiswa = {
      nim: 2011521023,
      nama: "HanifIzzaPratama",
      umur: 19,
    };
    response.json(mahasiswa);
  })

  //13 Dosen dapat mengubah referensi
  .put(function (request, response) {
    let obj = {
      message: "Anda berhasil mengubah referensi",
      code_eror: 0,
    };
  });

module.export = hanif;
