const express = require("express");

const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/login", authController.login);
router.get("/logout", auth, authController.logout);

module.exports = router;
