const express = require("express");
const auth = require("../middlewares/auth");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.addOne);
router.get("/:id", userController.getOne);
router.put("/:id", userController.updateOne);
router.get("/", auth, userController.getAll);
router.delete("/:id", userController.deleteOne);

module.exports = router;
