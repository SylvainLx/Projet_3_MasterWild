const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.create = (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  hashPassword(password)
    .then((hash) => {
      userDataAccess
        .addOne({ firstname, lastname, email, hash })
        .then((info) => res.status(201).json(info))
        .catch((err) => res.status(500).send({ err }));
    })
    .catch((err) => res.status(500).send({ err }));
};

exports.getOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  userDataAccess
    .findOne(userId)
    .then((user) => {
      if (user.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(user);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.getAll = (req, res) => {
  userDataAccess
    .findAll()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};
