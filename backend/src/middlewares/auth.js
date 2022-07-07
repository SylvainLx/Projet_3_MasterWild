const { decodeJWT } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJWT(token);
    req.userId = data.id;
    req.userName = data.name;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;
