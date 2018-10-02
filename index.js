require("dotenv").config();

var express = require("express");
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo')
var csurf = require('csurf')



var userRouter = require("./routes/user.route")
var authRouter = require("./routes/auth.route")
var productRoute=require("./routes/product.route")
var cartRoute=require("./routes/cart.route")
var transferRoute=require("./routes/transfer.route")
var apiProductRoute=require("./api/routes/product.route")

var authMiddleware=require("./middleware/auth.middleware")
var sessionMiddleware=require("./middleware/session.middleware")

var app = express();
console.log(process.env.SESSION_SECRET)
app.use(cookieParser(process.env.SESSION_SECRET))

// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

var port = 3002;

app.set('view engine', 'pug');
app.set("views", "./views");
app.use(express.static("public"));
// var csrfProtection = csrf({ })
// app.use(csurf({cookie: true }));

 app.use(bodyParser.json())
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }))

app.use(sessionMiddleware);

app.use("/api/product",apiProductRoute);
app.use("/cart",cartRoute);
app.use("/transfer",authMiddleware.requireAuth,transferRoute);

app.get("/", function(req, res) {
    res.render('index', { name: 'hung96' })
})
app.use("/users",authMiddleware.requireAuth, userRouter);
app.use("/auth",authRouter)
app.use("/products",productRoute);
app.listen(port, function() {
    console.log(port + " is running")
})