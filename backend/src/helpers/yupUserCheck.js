const yup = require("yup");

const yupUserCheck = async (obj) => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    birthday: yup.date(),
  });

  return schema.validate(obj);
};

module.exports = { yupUserCheck };
