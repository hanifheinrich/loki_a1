require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { isAdmin, isDosen, checkUser } = require("./middleware/authToken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("*", checkUser);

app.get("/", (req, res) => {
  res.render("index");
});

const dosenRouter = require("./routes/dosen");
app.use("/dosen", isDosen, dosenRouter);

const MahasiswaRouter = require("./routes/Mahasiswa");
app.use("/Mahasiswa", MahasiswaRouter);

const adminRouter = require("./routes/admin");
app.use("/admin", isAdmin, adminRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.render("404");
});
app.listen(8080, () => console.log("Server Running"));
