var mongoose = require("mongoose");

var regSchema = new mongoose.Schema({
    name:{type:String},
    roll:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
});

module.exports = mongoose.model("RegDatas",regSchema);      