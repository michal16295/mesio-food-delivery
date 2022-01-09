const userServices = require("./service");

module.exports.login = async (req, res, next) => {
  const data = req.body;
  let response = await userServices.login(data);
  if (response.status != 200) {
    res.status(response.status).send(response.data);
  } else {
    let jwt = response.data.jwt;
    let user = response.data.user;
    res.send({ jwt, user });
  }
};

module.exports.register = async (req, res, next) => {
  logger.info("register service");
  const data = req.body;
  let response = await userServices.register(data);
  res.status(response.status).send(response.data);
};
