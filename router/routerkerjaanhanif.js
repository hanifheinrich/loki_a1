const express = require("express");
const { append } = require("express/lib/response");
//new router
const hanif = express.Router();

const hanifcontroller = require("../controllers/controllerhanif");

//req.body(akses request data)
hanif.use(express.json()); // for parsing application/json
hanif.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Bagian Hanif Izza Pratama 9-13

hanif.get("/cpmk", hanifcontroller.lihatcpmk);

//9 Dosen dapat menambah CPMK mata kuliah
hanif.post("/cpmk", hanifcontroller.tambahcpmk);

//10 Dosen dapat mengubah CPMK mata kuliah
hanif.put("/cpmk/:course_plan_detail_id", hanifcontroller.ubahcpmk);

//11 Dosen dapat menghapus CPMK mata kuliah
hanif.delete("/cpmk/:deleteId", hanifcontroller.hapuscpmk);

//12 Dosen dapat menambah referensi
hanif.post("/referensi", hanifcontroller.tambahreferensi);

//13 Dosen dapat mengubah referensi
hanif.put("/referensi/:course_plan_id", hanifcontroller.ubahreferensi);
//expor modul hanif
module.exports = hanif;
