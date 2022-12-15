const { checkRoleAdmin } = require("../controllers/userController");

const authRoleAdmin = async (req, res, next) => {
  try {
    return checkRoleAdmin && next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = authRoleAdmin;
