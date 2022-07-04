const userDataAccess = require("../models/userDataAccess");
const { hashPassword } = require("../helpers/argonHelper");
const { yupUserCheck } = require("../helpers/yupUserCheck");

exports.addOne = async (req, res) => {
  const { password, email } = req.body;


  try {
    await yupUserCheck(req.body);
  } catch (err) {
    res.status(500).send({ err });
  }
  hashPassword(password)
    .then((hash) => {
      userDataAccess
        .createOne({
          ...req.body,
          password: hash,
        })
        .then((user) => console.error(user))
        .then(() => res.status(201).json({ ...req.body }))
        .catch((err) => {
          res.status(500).send({ err });
        });
    })
    .catch((err) => res.status(500).send({ err }));
};
// validationErrors = Movie.validate(req.body, false);
// if (validationErrors) {
//  return Promise.reject('INVALID_DATA');
// } else {
//   userDataAccess.findByEmail(email).then((user) => {
//   if (user) {
//     return Promise.reject('This email alredy exist');
//   }
// })
//   hashPassword(password)
//     .then((hash) => {
//       userDataAccess
//         .createOne({
//           firstname,
//           lastname,
//           email,
//           password: hash,
//         })
//         .then((user) => {
//           if (validationErrors) return Promise.reject('INVALID_DATA');
//           return Movie.update(req.params.id, req.body);})
//         .then(() => res.status(201).json({ ...existingMovie, ...req.body }))
//         .catch((err) => {
//           console.error(err);
//           res.status(500).send({ err });
//         });
//     })
//     .catch((err) => res.status(500).send({ err }));
// } else {
//   res.status(401).send("Error");
// }
// }
//
// };

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
