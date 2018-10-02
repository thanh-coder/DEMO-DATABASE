var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var controller=require("./../controllers/transfer.controller")

// var validate=require("../validate/validate")
var router = express.Router();

router.get("/create",controller.create)
router.post("/create",controller.postCreate)

module.exports = router
