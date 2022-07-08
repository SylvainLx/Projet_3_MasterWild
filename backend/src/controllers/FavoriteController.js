const favoriteDataAccess = require("../models/favoriteDataAccess");

exports.addFavorite = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const masterclassId = parseInt(req.params.masterclassId, 10);
  favoriteDataAccess
    .createOne(userId, masterclassId)
    .then((newFavorite) => console.error(newFavorite))
    .then(() => res.status(201).send("favorite added"))
    .catch((err) => {
      res.status(500).send({ err });
    });
};

exports.getFavorite = (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  favoriteDataAccess
    .findFavorite(userId)
    .then((favorites) => {
      if (favorites.length === 0) {
        res.send([]);
      } else {
        res.send(favorites);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.deleteFavorite = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const masterclassId = parseInt(req.params.masterclassId, 10);
  favoriteDataAccess
    .removeOne(userId, masterclassId)
    .then(() => res.status(201).send("favorite deleted"))
    .catch((err) => {
      res.status(500).send({ err });
    });
};
