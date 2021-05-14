const jwt = require("jsonwebtoken");
const { AuthQuery } = require("../Query/AuthQuery");

//Authorization check for admin
exports.authorizationChecker = (req, res) => {
  //if using in header
  // const token = req.header('auth-token');

  //from session
  const token = req.session.authToken;
  const id = jwt.verify(token, "secret");
  pool.query(AuthQuery, [id], (err, data) => {
    if (err) console.log(err);
    if (data.rows.type != "Admin") {
      return res.json({ message: "not admin" });
    }
  });
};
