const express = require("express");

const favoriteController = require("../controllers/FavoriteController");

const router = express.Router();

router.post("/:userId/:masterclassId", favoriteController.addFavorite);

router.delete("/:userId/:masterclassId", favoriteController.deleteFavorite);

router.get("/:userId", favoriteController.getFavorite);

module.exports = router;
