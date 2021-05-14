const Router = require("express").Router();
const {
  getPost,
  getPostById,
  addPost,
  deletePost,
  editPost,
} = require("../Controller/Controller");
const { authChecker } = require("../AuthO/AuthCheck");
const { authorizationChecker } = require("../AuthO/Authorization");

Router.get("/post", authChecker, getPost);
Router.get("/post/:id", authChecker, getPostById);
Router.put("/editpost/:id", authChecker, authorizationChecker, editPost);
Router.delete("/deletepost/:id", authChecker, authorizationChecker, deletePost);
Router.post("/addpost", authChecker, authorizationChecker, addPost);

module.exports = Router;
