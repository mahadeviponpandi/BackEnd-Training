var viewgrocery = (req,res)=>{
    res.send("<ul><li>milk</li><li>egg</li></ul>");
}
var viewstationary = (req,res)=>{
    res.send("<ul><li>Pen</li><li>pencil</li></ul>");
}
module.exports={viewgrocery,viewstationary};