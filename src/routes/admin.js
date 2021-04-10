const express = require("express");
var router = express.Router();

var adminController = require("../controllers/adminController");

router.post("/login", adminController.login);
router.get("/get_all_items", adminController.get_all_items);
router.delete("/delete_item/:id", adminController.delete_item);

module.exports = router;
