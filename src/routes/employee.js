const express = require("express");
var router = express.Router();
var employeeController = require("../controllers/employeeController");

var multerConfig = require("../utils/mutlerConfig");

router.post("/login", employeeController.login);
router.post("/add_item", multerConfig, employeeController.add_item);

module.exports = router;
