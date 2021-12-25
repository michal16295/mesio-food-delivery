const morgan = require("morgan");
const logger = require("../common/logger");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const Useragent = require("express-useragent");
const helmet = require("helmet");

// This will configure all middlewares
module.exports.configure = (app) => {
  app.use(cookieParser());
  app.use(compression());
  app.use(morgan("tiny", { stream: logger.stream }));
  app.use(Useragent.express());
  app.set("view engine", "ejs");
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.set("trust proxy", true);
  app.use(express.json());
};
