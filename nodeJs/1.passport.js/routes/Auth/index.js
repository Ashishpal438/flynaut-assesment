const express = require("express");
const Authentication = express.Router();

const Login = require("./login");
const Register = require("./signup");

Authentication.use("", Login, Register);

module.exports = Authentication;
