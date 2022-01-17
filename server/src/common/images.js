var axios = require("axios");
const config = require("../config/config.json");
const cloudinary = require("cloudinary").v2;
const logger = require("./logger")(__filename);

const { cloud_name, api_key, api_secret } = config;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const basePath = "foodDelivery";

module.exports.uploadFile = async (image, scale = true) => {
  // Log the function name and the data
  logger.info(`uploadImage  image.length: ${image.length}, scale: ${scale}`);

  try {
    const options = {
      public_id: `${basePath}`,
    };
    if (scale) {
      options.width = 350;
      options.crop = "scale";
    }
    console.log(image);
    return await cloudinary.uploader.upload(image, options);
  } catch (e) {
    // Catch error and log it
    logger.error(e.message);
    // Send to client that server error occured
    return null;
  }
};
