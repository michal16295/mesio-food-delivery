var axios = require("axios");
const config = require("../config/config.json");

module.exports.uploadFile = async (file) => {
  let response = {};
  try {
    let image = file.toString("base64");
    let data = {
      image,
      type: "base64",
      name: "myfile.png",
      title: "testing image",
    };
    let res = await axios.post("https://api.imgur.com/3/image", data, {
      headers: { Authorization: `Client-ID ${config.Client_ID}` },
    });
    const { id, link } = res.data.data;
    response.avatar = link;
    response.avatarId = id;
    return response;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
