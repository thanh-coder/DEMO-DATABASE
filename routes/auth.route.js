var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var controller=require("./../controllers/auth.controller")

// var validate=require("../validate/validate")
var router = express.Router();

// app.use(bodyParser.json())
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get("/login",controller.login)
router.post("/login",controller.postLogin)


module.exports = router
