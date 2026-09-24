const imgkit = require("@imagekit/nodejs");

const imgKit = new imgkit({
  privateKey: process.env.IMGKIT,
});

const upload = async (buffer) => {
  const res = await imgKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "img.jpg",
  });
  return res;
};

module.exports = upload;
