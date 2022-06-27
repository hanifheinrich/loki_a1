import user from "../models/users.js";

const login = (req, res, next) => {
  res.render("login");
};

const logout = (req, res, next) => {};

const auth = (req, res, next) => {};

export default { login, logout, auth };
