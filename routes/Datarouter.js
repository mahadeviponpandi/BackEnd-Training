var express = require('express');
var router = express.Router();
var Datacontroller = require("../controller/Datacontroller");

router.post('/addnew', Datacontroller.addNew);
router.get('/view',Datacontroller.View)
router.get('/viewbyid/:id',Datacontroller.ViewById)
router.get('/viewbyname/:name',Datacontroller.ViewByName)
router.get('/findbyname/:name',Datacontroller.FindByName)
router.put('/update/:id',Datacontroller.Update)
router.delete('/deletebyid/:id',Datacontroller.DeleteById)
router.delete('/deletebyemail/:email',Datacontroller.DeleteByemail)
router.delete('/deletemany',Datacontroller.Deletemany)
module.exports = router;
