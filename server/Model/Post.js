const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { collation: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
// module.exports = Post;
// module.exports = mongoose.model("Post", postSchema);
