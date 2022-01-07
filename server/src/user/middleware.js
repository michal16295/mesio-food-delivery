const security = require("../common/security");
const HEADER_AUTH = "authorization";

module.exports.tokenValidation = (req, res, next) => {
  const token = req.headers[HEADER_AUTH];
  if (token) {
    try {
      const decoded = security.verifyToken(token);
      req.decoded = decoded;
      next();
    } catch (err) {
      console.error("Invalid token");
      res.status(400).send({ error: "Invalid token.", tokenExpired: true });
    }
  } else {
    console.error("Token not provided");
    res.status(401).send({ error: "Token not provided.", tokenExpired: true });
  }
};
