const {
  responseError,
  responseSuccess,
  SERVER_ERROR,
} = require("../common/response");
const { uploadFile } = require("../common/images.js");
const logger = require("../common/logger")(__filename);
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

module.exports.register = async (data) => {
  logger.info("Register - email: " + data.email);
  let response = {};
  try {
    const avatar = data.avatar;
    delete data.avatar;
    data.password = await security.crypt(data.password);
    data.email = data.email.toLowerCase();
    user = await User.create(data);

    this.uploadImage(user.dataValues.id, avatar);
    response = { userId: user.id };
  } catch (e) {
    // Catch error and log it
    logger.error(e.message);
    return responseError(500, e.message);
  }
  return responseSuccess(response);
};

module.exports.uploadImage = async (userId, file) => {
  logger.info(`upload profile image - userId: ${userId}`);
  let response;
  try {
    let user = await User.findByPk(userId);
    if (!user) {
      logger.warn("User not found");
      return responseError(404, "User not found");
    }

    //upload new image
    console.log(file);
    const imageData = await uploadFile(file);
    console.log({ imageData: imageData });
    if (!imageData) {
      logger.warn("Can't upload image");
      return responseError(400, "Can't upload image");
    }
    await User.update({ avatar: imageData }, { where: { id: userId } });
  } catch (e) {
    logger.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
