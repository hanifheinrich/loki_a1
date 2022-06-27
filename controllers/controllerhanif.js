//data.json
let cpmks = [
  { course_plan_detail_id: 001, description: "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)" },
  { course_plan_detail_id: 002, description: "Mahasiswa mampu ngoding" },
];
let referensi = [{ course_plan_id: 001, tittle: "Beginning PHP 5.3", author: "Matt Doyle", publisher: "Wrox", year: 2009, decription: "" }];

module.exports = {
  tambahcpmk: function (request, response) {
    cpmks.push(request.body);
    response.send({
      status: true,
      data: cpmks,
      message: "data berhasil di simpan",
      method: request.method,
      url: request.url,
    });
  },
  ubahcpmk: function (request, response) {
    const course_plan_detail_id = request.params.course_plan_detail_id;
    cpmks.filter((cpmk) => {
      if (cpmk.course_plan_detail_id == course_plan_detail_id) cpmk.course_plan_detail_id = course_plan_detail_id;
      cpmk.description = request.body.description;
      return cpmk;
    });
    response.json({
      status: true,
      data: cpmks,
      message: "data berhasil di edit",
      method: request.method,
      url: request.url,
    });
  },
  hapuscpmk: function (request, response) {
    let id = request.params.deleteId;
    cpmks = cpmks.filter((cpmk) => cpmk.course_plan_detail_id != id);
    response.json({
      status: true,
      data: cpmks,
      message: "data berhasil di hapus",
      method: request.method,
      url: request.url,
    });
  },
  tambahreferensi: function (request, response) {
    referensi.push(request.body);
    response.send({
      status: true,
      data: referensi,
      message: "data berhasil di simpan",
      method: request.method,
      url: request.url,
    });
  },
  tambahreferensi: function (request, response) {
    referensi.push(request.body);
    response.send({
      status: true,
      data: referensi,
      message: "data berhasil di simpan",
      method: request.method,
      url: request.url,
    });
  },
  ubahreferensi: function (request, response) {
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
    response.json({
      status: true,
      data: referensi,
      message: "data berhasil di edit",
      method: request.method,
      url: request.url,
    });
  },
  lihatcpmk: function (request, response) {
    const datas = {
      course_plan_id: 001,
      tittle: "Beginning PHP 5.3",
      author: "Matt Doyle",
      publisher: "Wrox",
      year: 2009,
      decription: "",
    };
    //render ejs dan data
    response.render("index", { datas: datas });
  },
};
