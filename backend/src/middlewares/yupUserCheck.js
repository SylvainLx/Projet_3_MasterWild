const yup = require("yup");

const yupUserCheck = async (req, res, next) => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    birthday: yup.date(),
  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res.status(500).send({ err });
  }
};

module.exports = { yupUserCheck };
