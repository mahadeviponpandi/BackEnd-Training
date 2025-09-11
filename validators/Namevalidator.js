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

module.exports= {NameUserValidation};