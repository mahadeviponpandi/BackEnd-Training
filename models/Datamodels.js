var mongoose = require("mongoose");

var dataSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phonenumber:{type:Number}
});

module.exports = mongoose.model("Datas",dataSchema);