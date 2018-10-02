var db = require("../data")

var shortid = require("shortid")

module.exports.create=function(req,res,next){
    res.render("transfer/create",{
         csrfToken: req.csrfToken() 
    })
}
module.exports.postCreate=function(req,res,next){
    var data={
        id:shortid.generate(),
        amount:parseInt(req.body.amount),
        account:req.body.account,
        userId:req.signedCookies.userId
    }
    db.get("transfers").push(data).write();
    res.redirect("/transfer/create");


}