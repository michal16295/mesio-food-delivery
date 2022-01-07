const express = require("express");
const router = express.Router();
const controller = require("./controller");
const middleware = require("./middleware");

router.post("/login", controller.login);

module.exports = router;
