var express = require("express");
var router = express.Router();

router.use(require("./userController.js"));
router.use(require("./projectContoller.js"));


module.exports = router;