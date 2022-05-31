const postSchema = require("../models/post.model");
const getAllPost = async (req, res) => {
  const posts = await postSchema.find();
  return res.status(200).json({posts});
};
const createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = new postSchema({
    title,
    content,
  });
  const result = await newPost.save();
  return res.status(200).json("success");
};
module.exports = { createPost,getAllPost };
