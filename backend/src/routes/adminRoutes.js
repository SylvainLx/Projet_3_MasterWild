const express = require("express");

const masterclassController = require("../controllers/adminController");

const router = express.Router();

const multer = require("../middlewares/multer");

router.post("/masterclass", multer, masterclassController.addOne);
router.get("/masterclass", masterclassController.getAll);
router.delete("/masterclass/:id", masterclassController.deleteOne);

module.exports = router;
