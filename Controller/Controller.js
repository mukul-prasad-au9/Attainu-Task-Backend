const pool = require("../db");
const jwt = require("jsonwebtoken");

const {
  getPostByIdQuery,
  getPostQuery,
  deletePostQuery,
  editPostQuery,
  addPostQuery,
} = require("../Query/PostQuery");
const { LoginQuery } = require("../Query/AuthQuery");

const Login = (req, res) => {
  const { email, password } = req.body;
  pool.query(LoginQuery, [email, password], (err, data) => {
    if (err) console.log(err);
    if (!data.rows.length) {
      return res.json({ message: "wrong credentials" });
    }
    var token = jwt.sign({ id: data.rows.id }, "secret", {
      expiresIn: 86400,
    });
    req.session.authToken = token;
    return res.header("auth-token", token).json({
      message: "Login successfull",
    });
  });
};
const Logout = (req, res) => {
  try {
    if (req.session.authToken) {
      req.session.destroy((err) => {
        if (err) return console.log(err);
        return res.json({
          message: "User Logged out successfully",
        });
      });
    } else {
      return res.json({
        message: "User not logged in, login first",
      });
    }
  } catch (err) {
    return console.log(err);
  }
};
const getPost = (req, res) => {
  pool.query(getPostQuery, (err, data) => {
    if (err) console.log(err);
    if (!data.rows.length) {
      return res.json({ message: "no post found" });
    }
    res.status(200).json(data.rows);
  });
};

const getPostById = (req, res) => {
  const id = req.params.id;
  pool.query(getPostByIdQuery, [id], (err, data) => {
    if (err) console.log(err);
    if (!data.rows.length) {
      return res.json({ message: "no post found" });
    }
    res.status(200).json(data.rows);
  });
};

const addPost = (req, res) => {
  const { topic, post } = req.body;
  pool.query(addPostQuery, [topic, post], (err, data) => {
    if (err) console.log(err);
    res.status(200).json({ message: "post added" });
  });
};

const editPost = (req, res) => {
  const { topic, post } = req.body;
  const id = req.params.id;
  pool.query(editPostQuery, [topic, post], [id], (err, data) => {
    if (err) console.log(err);
    if (!data.rows.length) {
      return res.json({ message: "no post found" });
    }
    res.status(200).json({ message: "post edited" });
  });
};

const deletePost = (req, res) => {
  const id = req.params.id;
  pool.query(deletePostQuery, [id], (err, data) => {
    if (err) console.log(err);
    if (!data.rows.length) {
      return res.json({ message: "no post found" });
    }
    res.status(200).json({ message: "post deleted" });
  });
};

module.exports = {
  getPost,
  getPostById,
  deletePost,
  editPost,
  addPost,
  Login,
  Logout,
};
