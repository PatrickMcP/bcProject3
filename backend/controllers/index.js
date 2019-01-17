var express = require("express");
var router = express.Router();

router.use(require("./userController.js"));
router.use(require("./projectContoller.js"));
router.use(require("./boardContoroller.js"));
router.use(require("./listController.js"));
router.use(require("./cardController"));

module.exports = router;