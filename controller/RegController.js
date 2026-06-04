const bcrypt = require('bcrypt')
const RegisterController = require('../models/Regmodels')

const userRegistration = async (req,res)=>{
    const {name,role,email,phone,password}=req.body; 
    const hashpassword = await bcrypt.hash(password,10);
    console.log(hashpassword);
   
    const Newuser = new RegisterController({
        name,
        role,
        email,
        phone,
        password:hashpassword
    });
    try{
        const RegUser = await Newuser.save();
        console.log(RegUser);
        
        res.status(200).json({
            msg:"User Registration Successfully",
            data:RegUser
        })
    }
    catch(err){
        res.status(500).send(`datas can't be saved ${err}`);
    }
}
var view = async (req,res) => {
   
    try {
        var viewdatas = await RegisterController.find();
        res.status(201).json({msg:"id finded..." ,data:viewdatas});
    } catch (error) {
       res.status(505).json({msg:"server error" ,error:error}) ;
    }
}

var viewByid = async (req,res) => {
    var id = req.params.id;
    try {
        var viewdata = await RegisterController.findById(id);
        res.status(201).json({msg:"id finded..." ,data:viewdata});
    } catch (error) {
       res.status(500).json({msg:"server error" ,error:error}) ;
    } 
}




const login = async(req,res) =>{
   try{
    const {email,password}=req.body;
    const user = await RegisterController.findOne({email});

    const isMatch = await bcrypt.compare(password ,user.password);

    if(!isMatch) return res.status(404).json({msg:"password is not match"});

    res.status(200).json({msg:"login Successfully",
        data:isMatch
    })
   } 
   catch(error){
    res.status(500).json({msg:"server error",
        data:error
    })
   }
}

module.exports = {userRegistration,view,login,viewByid}