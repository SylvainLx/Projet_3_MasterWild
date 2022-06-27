const Joi = require("joi");
const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.addOne = (req, res) => {
  const { firstname, lastname, email, password, birthdayDate } = req.body;
  let validationErrors = null;

  // userDataAccess.findByEmail((email) => )

  validationErrors = Joi.object({
    firstname: Joi.string().max(150).required(),
    lastname: Joi.string().max(150).required(),
    email: Joi.string().max(250).required(),
    password: Joi.string().max(3000).required(),
    birthdayDate: Joi.date(),
  }).validate(
    { firstname, lastname, email, password, birthdayDate },
    { abortEarly: false }
  ).error;
  console.error(validationErrors);
  if (validationErrors) {
    Promise.reject(new Error("INVALID_DATA"));
  } else {
    hashPassword(password)
      .then((hash) => {
        userDataAccess
          .createOne({ ...req.body, password: hash })
          .then((info) => console.error(info))
          .then((info) => res.status(201).json(info))
          .catch((err) => res.status(500).send({ err }));
      })
      .catch((err) => res.status(500).send({ err }));
  }
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
