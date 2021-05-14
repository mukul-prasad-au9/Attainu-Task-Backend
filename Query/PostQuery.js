const getPostQuery = "SELECT * FROM Post";
const getPostByIdQuery = "SELECT * FROM Post WHERE id=$1";
const addPostQuery = "INSERT INTO Post(topic,post) VALUES ($1,$2)";
const editPostQuery = "UPDATE Post SET topic=$1,post=$2 WHERE id = $3,";
const deletePostQuery = "DELETE FROM Post WHERE id = $1";

module.exports = {
  getPostQuery,
  getPostByIdQuery,
  addPostQuery,
  editPostQuery,
  deletePostQuery,
};
