const pool = require("../db");
const {
  getPostByIdQuery,
  getPostQuery,
  deletePostQuery,
  editPostQuery,
  addPostQuery,
} = require("../Query/PostQuery");

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
};
