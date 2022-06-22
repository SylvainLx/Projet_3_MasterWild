const express = require("express");

const userController = require("../controllers/userController");

// const auth = require("../middlewares/auth");

const router = express.Router();

// router.post("/", userController.addOne);
router.get("/:id", userController.getOne);
// router.put("/", auth, userController.updateOne);
router.get("/", userController.getAll);
// router.delete("/:id", userController.deleteOne);

module.exports = router;
