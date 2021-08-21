var express = require("express");
const listController = require("./../controllers/listController");
 

var router = express.Router();
 

router.post("/", listController.createList);

router.delete("/:_id/:_idElement", listController.deleteElement);
router.put("/:_id", listController.updateElement);

router.get("/", listController.getAllList);
  

module.exports = router;
