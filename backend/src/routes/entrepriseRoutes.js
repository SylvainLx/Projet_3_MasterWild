const express = require("express");

const entrepriseController = require("../controllers/entrepriseController");

const router = express.Router();

router.get("/", entrepriseController.getAll);
router.get("/:id", entrepriseController.getOne);
router.put("/:id", entrepriseController.updateOne);
router.delete("/:id", entrepriseController.deleteOne);

module.exports = router;
