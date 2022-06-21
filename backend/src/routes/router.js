const express = require("express");

const { ItemController } = require("../controllers");
const masterclassController = require("../controllers/masterclassController");

const router = express.Router();

const multer = require("../middlewares/multer");

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/masterclass", multer, masterclassController.addOne);
router.get("/", masterclassController.getAll);
router.delete("/:id", masterclassController.deleteOne);

module.exports = router;
