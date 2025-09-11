var express = require('express');
var router = express.Router();
var staffcontroller = require('../controller/staffcontroller')

router.get('/glist',staffcontroller.viewgrocery);
router.get('/slist',staffcontroller.viewstationary);

module.exports = router;
