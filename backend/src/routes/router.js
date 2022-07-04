const express = require("express");

const masterclassController = require("../controllers/masterclassController");

const router = express.Router();

const multer = require("../middlewares/multer");

router.post("/masterclass", multer, masterclassController.addOne);
router.get("/masterclass", masterclassController.getAll);
router.get("/masterclass/:id", masterclassController.getOne);
router.put("/masterclass/:id", masterclassController.editOne);
router.delete("/masterclass/:id", masterclassController.deleteOne);

router.get("/keywords", masterclassController.getAllKeywords);

module.exports = router;
