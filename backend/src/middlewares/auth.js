const { decodeJWT } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const token = req.cookies.auth_token;
  // On recupere le token.
  // Pour chaque requete entrante, on vérifie s'il y a un token
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJWT(token);
    req.userId = data.id;
    req.userName = data.name;
    return next();
    // Pour accèder à la route en question
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;
