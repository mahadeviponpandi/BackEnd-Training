var express = require('express');
var router = express.Router();
var taskcontroller = require('../controller/taskcontroller');

router.get('/alist',taskcontroller.viewanimalgames);
router.get('/splist',taskcontroller.viewsportsgames);
router.get('/stlist',taskcontroller.viewstrategygames);
router.get('/mlist',taskcontroller.viewmergegames);
router.get('/blist',taskcontroller.viewbubbleshootergames);


module.exports = router;
