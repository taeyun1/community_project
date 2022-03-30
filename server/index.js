const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

const { Post } = require("./Model/Post");

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://<user>:<password>@cluster0.7mzfa.mongodb.net/Community?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log(`Connecting MongoDB...`);
      console.log(`MongoDB 연결성공...`);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  console.log(temp);

  const CommunityPost = new Post(temp);

  CommunityPost.save()
    .then(() => {
      console.log(req.body);
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/list", (req, res) => {
  // 몽고DB에서 Document를 찾는건 find 명령어
  Post.find()
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});
