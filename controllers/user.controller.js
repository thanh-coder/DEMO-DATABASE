
var db = require("../data")


var shortid = require("shortid")

db.defaults({ users: [] })
    .write()

module.exports.index= function(req, res) {
    res.render("users/index", {
        users: db.get('users').value()
    })
}
module.exports.search=function(req, res) {
    var q = req.query.q;
    var matched =  db.get('users').value().filter((user, index) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render("users/index", {
        users: matched
    })
}
module.exports.create=function(req, res) {
    res.render('users/create')
}
module.exports.get=function (req, res) {
    var id = req.params.id;
    const user = db
        .get('users')
        .find({ id: id }).value();
    console.log(user);

    res.render("users/view", { user: user })
}
module.exports.postCreate=function(req, res) {
    req.body.id = shortid.generate();
    req.body.avatar=req.file.path.split("/").slice(1).join("/");
       db.get("users").push(req.body).write();
    res.redirect("/users")
}
