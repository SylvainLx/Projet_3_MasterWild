const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.addOne = async (req, res) => {
  const { password, email } = req.body;

  userDataAccess.findByEmail(email).then((user) => {
    if (user) {
      res.status(500).send("This email alredy exist");
    }
    hashPassword(password)
      .then((hash) => {
        userDataAccess
          .createOne({
            ...req.body,
            password: hash,
          })
          .then((newUser) => console.error(newUser))
          .then(() => res.status(201).json({ ...req.body }))
          .catch((err) => {
            res.status(500).send({ err });
          });
      })
      .catch((err) => res.status(500).send({ err }));
  });
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

exports.getAllExcel = (req, res) => {
  userDataAccess
    .findAllExcel()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err));
};

exports.deleteOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  userDataAccess
    .removeOne(userId)
    .then((deleteUser) => res.send(deleteUser))
    .catch((err) => res.status(500).send(err));
};

exports.updateOne = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { password } = req.body;

  if (password) {
    hashPassword(password)
      .then((hash) => {
        userDataAccess
          .modifyOne(userId, { ...req.body, password: hash })
          .then((info) => console.error(info))
          .then((info) => res.status(201).json(info))
          .catch((err) => res.status(300).send({ err }));
      })
      .catch((err) => res.status(500).send({ err }));
  } else {
    userDataAccess
      .modifyOne(userId, { ...req.body })
      .then((info) => console.error(info))
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(300).send({ err }));
  }
};
