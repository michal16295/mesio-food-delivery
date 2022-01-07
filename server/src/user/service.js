const {
  responseError,
  responseSuccess,
  SERVER_ERROR,
} = require("../common/response");
const security = require("../common/security");
const model = require("../models");
const { sequelize, User } = model;

module.exports.login = async (data) => {
  console.log(`Login  attempt of user ${data.email}`);
  let response;
  try {
    return response;
  } catch (err) {
    console.error(err.message);
    return responseError(500, SERVER_ERROR);
  }
};
