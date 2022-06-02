const { request } = require("express");
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
//impor modul hanif
const hanifRouter = require("./routerkerjaanhanif");
const app = express();

//set template engine
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("login.ejs");
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

app.use(hanifRouter);
app.listen(3000, function () {
  console.log("server sedang berjalan");
});

app.use("/", (request, response) => {
  response.render("eror.ejs");
});
