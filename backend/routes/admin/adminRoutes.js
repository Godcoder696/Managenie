const express= require("express");
const { adminLogin, adminSignUp } = require("../../controller/adminController");

const router= express.Router();

// login-signup
router.route("/login").get(adminLogin);
router.route("/signup").post(adminSignUp);

module.exports= router