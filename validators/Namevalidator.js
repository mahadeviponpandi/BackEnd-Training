const Joi = require("joi");

const NameValidation = Joi.object({
    name:Joi.string().required()
})

const NameUserValidation = async (req,res,next) => {
    const nameValidator = {
        name:req.body.name
    }

const error = NameValidation.validate(nameValidator)
console.log(error);

if(error.error){
    var result=error.datails;
    console.log(result);
    res.status(404).json({msg:"Un Authorized User",error:result});
}else{
    next();
}
};


const PasswordValidation = Joi.object({
    password: Joi.string().min(6).max(10).required()
})

const PasswordUserValidation = async (req,res,next) => {
    const passwordValidator = {
        password:req.body.name
    }

const error = PasswordValidation.validate(passwordValidator)
console.log(error);

if(error.error){
    var result=error.datails;
    console.log(result);
    res.status(404).json({msg:"Un Authorized User",error:result});
}else{
    next();
}
};


const PhoneValidation = Joi.object({
    phone:Joi.string().length(10).required()
})

const PhoneUserValidation = async (req,res,next) => {
    const phoneValidator = {
        phone:req.body.name
    }

const error = PhoneValidation.validate(phoneValidator)
console.log(error);

if(error.error){
    var result=error.datails;
    console.log(result);
    res.status(404).json({msg:"Un Authorized User",error:result});
}else{
    next();
}
};

const EmailValidation = Joi.object({
   email:Joi.string().required()
})

const EmailUserValidation = async (req,res,next) => {
    const emailValidator = {
        email:req.body.name
    }

const error = EmailValidation.validate(emailValidator)
console.log(error);

if(error.error){
    var result=error.datails;
    console.log(result);
    res.status(404).json({msg:"Un Authorized User",error:result});
}else{
    next();
}
};
module.exports= {NameUserValidation,PasswordUserValidation,PhoneUserValidation,EmailUserValidation};