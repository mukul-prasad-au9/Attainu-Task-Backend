const jwt = require("jsonwebtoken");
const router = require("express").Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  var token = jwt.sign({ id: userData._id }, secret, {
    expiresIn: 86400,
  });
  req.session.authToken = token;
  return res.header("auth-token", token).json({
    message: "Login successfull",
  });
});
router.get("/logout", (req, res) => {
  try {
    if (req.session.authToken) {
      req.session.destroy((err) => {
        if (err) return console.log(err);
        return res.json({
          message: "User Logged out successfully",
          status: 200,
        });
      });
    } else {
      return res.json({
        message: "User not logged in, login first",
        status: 300,
        error: "User not logged in, login first",
      });
    }
  } catch (err) {
    return console.log(err);
  }
});
