const { checkRoleAdmin } = require("../controllers/userController");

const authRoleAdmin = async (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    return checkRoleAdmin && next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = authRoleAdmin;
