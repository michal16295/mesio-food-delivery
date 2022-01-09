const path = require("path");
const user = require("../user/routes");

// This configs all routes
module.exports = function (app) {
  // All the APIs will go here

  app.use("/api/user", user);

  app.use((req, res, next) => {
    res.status(404).send({ error: "Not found", data: null });
  });
};
