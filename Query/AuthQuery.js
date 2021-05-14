const LoginQuery = "SELECT * FROM users WHERE email=$1 and password=$2";
const AuthQuery = "SELECT type FROM users WHERE id=$1";

module.exports = {
  LoginQuery,
  AuthQuery,
};
