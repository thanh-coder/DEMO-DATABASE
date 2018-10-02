var Product=require("../models/product.model");
module.exports.index=async (req,res,next)=>{
    // var page=parseInt(req.query.page)||1;
    // var perpage=8;
    // var start=(page-1)*perpage;
    // var end=page*perpage;
    // res.render("products/index1",{
    //     products:db.get("products").value().slice(start,end)
try{
 var products=await Product.find();
//  products.foo();
res.render("products/index1",{
    products:products
})
}catch(error){
    next(error)
}
}