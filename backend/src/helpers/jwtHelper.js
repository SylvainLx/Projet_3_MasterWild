const jwt = require("jsonwebtoken");

// Creation du token
const encodeJWT = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" });
};

// Decoder le token
const decodeJWT = (token) => {
  return jwt.decode(token, process.env.TOKEN_SECRET);
};

module.exports = { encodeJWT, decodeJWT };
