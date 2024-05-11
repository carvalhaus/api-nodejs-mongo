const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const jwtSecret = authConfig.secret;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: true,
      message: "Token has not been provided!",
    });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({
      error: true,
      message: "Invalid token type!",
    });
  }

  const [scheme, token] = parts;

  if (scheme.indexOf("Bearer") !== 0) {
    return res.status(401).json({
      error: true,
      message: "Token with incorrect format",
    });
  }

  return jwt.verify(token, jwtSecret, (err, decoded) => {
    console.log(err);
    console.log(decoded);

    if (err) {
      return res.status(401).json({
        error: true,
        message: "Token invalid/expired",
      });
    }

    req.userLooged = decoded;

    return next;
  });
};
