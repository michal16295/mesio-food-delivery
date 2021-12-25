const express = require("express");
const logger = require("./common/logger")(__filename);
const app = express();
const configMiddleware = require("./start/middleware");
const config = require("./config/config.json");

logger.info("Starting server...");

configMiddleware.configure(app);

require("./startup/routes")(app);

const PORT = config.port;

const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = server;
