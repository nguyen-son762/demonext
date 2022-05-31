const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const Post = (module.exports = mongoose.model("Post", PostSchema));
