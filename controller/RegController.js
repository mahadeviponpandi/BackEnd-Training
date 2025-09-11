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
module.exports = {userRegistration}