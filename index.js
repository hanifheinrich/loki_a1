const { request } = require("express");
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
//impor modul hanif
const hanifRouter = require("./router/routerkerjaanhanif");
const app = express();

//set template engine
app.set("view engine", "ejs");

app.use(hanifRouter);
app.listen(3000, function () {
  console.log("server sedang berjalan");
});

app.use("/", (request, response) => {
  response.render("login.ejs");
});

app.use("/", (request, response) => {
  response.render("eror.ejs");
});
