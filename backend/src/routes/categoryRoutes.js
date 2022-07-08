const express = require("express");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.delete("/:id", categoryController.deleteOne);

module.exports = router;
