var express = require('express');
var router = express.Router();
var RegController = require('../controller/RegController');
var Validator =require('../validators/Regvalidators')
var NameValidator=require('../validators/Namevalidator')


router.post('/newuser',Validator.RegUserValidation,RegController.userRegistration);
router.post('/singledata',RegController.userRegistration);

module.exports = router;