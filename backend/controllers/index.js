var express = require("express");
var router = express.Router();

router.use(require("./userController.js"));



module.exports = router;