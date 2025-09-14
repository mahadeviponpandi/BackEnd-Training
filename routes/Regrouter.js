var express = require('express');
var router = express.Router();
var RegController = require('../controller/RegController');
var Validator =require('../validators/Regvalidators')
var NameValidator=require('../validators/Namevalidator')


router.post('/newuser',Validator.RegUserValidation,RegController.userRegistration);
router.post('/singledata',NameValidator.NameUserValidation,RegController.userRegistration);
router.post('/singledatapswd',NameValidator.PasswordUserValidation,RegController.userRegistration);
router.post('/singledataphone',NameValidator.PhoneUserValidation,RegController.userRegistration);
router.post('/singledataemail',NameValidator.EmailUserValidation,RegController.userRegistration);

module.exports = router;