const Joi = require('joi');

const RegValidation = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).max(10).required(),
    phone:Joi.string().length(10).required(),
    email:Joi.string().required(),
});

const RegUserValidation = async (req,res,next) => {

    const regValidator = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password:req.body.password,
    };

    const error = RegValidation.validate(regValidator);
    console.log(error);
    
    if(error.error){
        var result =error.details;
        console.log(result);
        res.status(404).json({msg:"Un Authorized User....!",error:result});
    }else{
        next();
    }
};

module.exports = {RegUserValidation};
