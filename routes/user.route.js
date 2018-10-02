var express = require("express");
var app = express();
// var bodyParser = require("body-parser");

var controller=require("./../controllers/user.controller")
var validate=require("../validate/validate")
var router = express.Router();
var authMiddleware=require("./../middleware/auth.middleware")
var multer  = require('multer')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// router.get("/", function(req, res) {
//     res.render('index', { name: 'hung96' })
// })

var upload = multer({ dest: './public/uploads/' })

router.get('/',controller.index)
router.get('/search', controller.search)

router.get("/create",controller.create )

router.get("/:id",controller.get )
router.post('/create', upload.single('avatar'),validate.postCreate,controller.postCreate )



module.exports = router