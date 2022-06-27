const { request } = require("express");
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
//impor modul hanif
const hanifRouter = require("./router/routerkerjaanhanif");
const user_controller = require("./router/user");
import session from "express-session";
const app = express();

app.use(
  session({
    secret: "ini adalah kode secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

//set template engine
app.set("view engine", "ejs");

app.get("/", user_controller.login);

app.use(hanifRouter);
app.listen(3000, function () {
  console.log("server sedang berjalan");
});

app.use("/", (request, response) => {
  response.render("eror.ejs");
});
