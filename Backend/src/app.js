const express = require("express");
const postModel = require("./model/post.model");
const multer = require("multer");
const upload = require("./services/post.service");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const post = multer({
  storage: multer.memoryStorage(),
});

app.post("/createPost", post.single("img"), async (req, res) => {
  const caption = req.body.caption;
  const file = await upload(req.file.buffer);
  await postModel.create({
    img: file.url,
    caption: caption,
  });
  res.status(201).json({
    msg: "Post Created ",
  });
});

app.get("/feed", async (req, res) => {
  const images = await postModel.find();
  res.status(200).json({
    msg: "Post Fetched Successfully",
    image: images,
  });
});

module.exports = app;
