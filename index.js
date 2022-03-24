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

app.listen(3000, function () {
  console.log("server sedang berjalan");
});
