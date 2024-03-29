const express= require("express");
const { loginUser, signUpUser } = require("../../controller/userController");

const router= express.Router();

// signin-up routes
router.route("/login").post(loginUser);
router.route("/signup").post(signUpUser);

module.exports= router

