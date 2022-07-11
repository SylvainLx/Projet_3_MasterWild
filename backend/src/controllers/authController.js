const userDataAccess = require("../models/userDataAccess");
const favoriteDataAccess = require("../models/favoriteDataAccess");
const { verifyPassword } = require("../helpers/argonHelper");
const { encodeJWT } = require("../helpers/jwtHelper");

exports.login = (req, res) => {
  const { email, password } = req.body;
  userDataAccess.findByEmail(email).then((user) => {
    console.error(user);
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      verifyPassword(password, user.password).then((verification) => {
        if (verification) {
          favoriteDataAccess.findFavorite(user.Id).then((favorites) => {
            const favoritesIdList = favorites.map(
              (favorite) => favorite.masterclass_Id
            );
            const token = encodeJWT(user);
            res.cookie("auth_token", token, { httpOnly: true, secure: false });
            res.status(201).json({ ...user, favorites: favoritesIdList });
          });
        } else {
          res.status(401).send("Invalid credentials");
        }
      });
    }
  });
};

exports.logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};
