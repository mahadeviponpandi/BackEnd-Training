const Datamodels = require("../models/Datamodels");
var Datas = require("../models/Datamodels");

var addNew = async (req,res)=>{
    var {name,email,phonenumber}=req.body; 
    var datas = new Datas({
        name,
        email,
        phonenumber
    });
    try{
        var result = await datas.save();
        res.send(result);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

// Data View method //

var View = async(req,res)=>{
    try{
        var result = await Datas.find();
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
}

// ViewById method //

const ViewById = async (req,res) => {
    const Id = req.params.id;
    console.log(Id);
    try {
        const FindId = await Datas.findById(Id);
        res.json({msg:"find this id successfully",
        data:FindId
    })
    } catch (error) {
        res.status(500).json(error)
    }    
}

const ViewByName = async (req,res) => {
    const name = req.params.name;
    console.log(name)
    try {
        const FindName = await Datas.find({name:name});
        res.status(200).json({msg:"find this name successfully",
        data:FindName
    })
    } catch (error) {
        res.status(500).json(error)
    }    
}
    
const FindByName = async (req,res) => {
    const name = req.params.name;
    console.log(name)
    try {
        const FindoneName = await Datas.findOne({name:name});
        res.status(200).send(FindoneName)
    } catch (error) {
        res.status(500).json(error)
    }    
}

// Update data //
var Update =async (req,res) => {
    const id = req.params.id;
    const updateData = req.body;
    try{
        const UpdateUser = await Datas.findByIdAndUpdate(id,updateData,{
            new:true,
            runValidators:true //Schema validator
        })
        res.status(200).json({
            data:UpdateUser,
            msg:"Success"
    })
    }
    catch{
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}

var DeleteById = async (req,res) => {
    const id = req.params.id;

    try{
        const DeleteUser = await Datas.findByIdAndDelete(id);
        res.status(200).json({
            data:DeleteUser,
            msg:"Success"
        })
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}

var DeleteByemail = async (req,res) => {
    const email = req.params.email;
    try{
        const DeleteoneUser = await Datas.deleteOne({email:email});
        res.status(200).json({
            data:DeleteoneUser,
            msg:"Success"
        })
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}

var Deletemany= async (req,res) => {
  
    try{
        const DeleteoneUser = await Datas.deleteMany();
        res.status(200).json({
            data:DeleteoneUser,
            msg:"Success"
        })
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}



module.exports = {addNew,View,ViewById,ViewByName,FindByName,Update,DeleteById,DeleteByemail,Deletemany};