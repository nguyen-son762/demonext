const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
router.get("/", postController.getAllPost);
router.post("/create", postController.createPost);

module.exports = router;