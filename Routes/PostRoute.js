const Router = require("express").Router();
const {
  getPost,
  getPostById,
  addPost,
  deletePost,
  editPost,
} = require("../Controller/PostController");

Router.get("/post", getPost);
Router.get("/post/:id", getPostById);
Router.put("/editpost", editPost);
Router.delete("/deletepost", deletePost);
Router.post("/addpost", addPost);

module.exports = Router;
