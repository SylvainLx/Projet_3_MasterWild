// import * as yup from 'yup';
const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");

exports.addOne = (req, res) => {
  const { firstname, lastname, email, password, birthday } = req.body;
  console.error(password);

  // let schema = yup.object().shape({
  //   firstname: yup.string().required(),
  //   lastname: yup.string().required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(8).required(),
  //   birthday: yup.date(),
  // });

  // schema.isValid({ user })
  //  .then(function (valid) {
  //    valid;
  //  });

  hashPassword(password)
    .then((hash) => {
      userDataAccess
        .createOne({
          firstname,
          lastname,
          email,
          birthday_date: birthday,
          password: hash,
        })
        .then((info) => console.error(info))
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

  // let schema = yup.object().shape({
  //   firstname: yup.string().required(),
  //   lastname: yup.string().required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(8).required(),
  //   birthday: yup.date(),
  // });

  // schema.isValid({ user })
  //  .then(function (valid) {
  //    valid;
  //  });

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
