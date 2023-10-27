const express = require("express");
const loginRouter = express.Router();

const {
    newUser,
    login,
  } = require("../controller/user.controllers.js");


loginRouter.route("/new").post(newUser);
loginRouter.route("/login").post(login);

module.exports = loginRouter;