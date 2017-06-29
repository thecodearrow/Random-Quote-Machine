//Dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//Schema
var productSchema=new mongoose.Schema({
quote: String,
author: String,

});

//Return model
module.exports=restful.model('Products',productSchema);