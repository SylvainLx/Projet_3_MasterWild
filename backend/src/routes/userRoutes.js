const express = require("express");
// const auth = require("../middlewares/auth");

const userController = require("../controllers/userController");

const { yupUserCheck } = require("../middlewares/yupUserCheck");

const router = express.Router();

router.post("/", yupUserCheck, userController.addOne);
router.get("/:id", userController.getOne);
router.put("/:id", yupUserCheck, userController.updateOne);
router.get("/", userController.getAll);
router.get("/excel", userController.getAllExcel);
router.delete("/:id", userController.deleteOne);

module.exports = router;
