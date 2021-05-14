//Auth checker to check user is logged in or not
exports.authChecker = (req, res) => {
  //when checking in header for FE part
  //   const token = req.header("auth-token");
  //   if (!token) return res.json({ message: "User not logged in" });

  //Checking in session for BE
  if (!req.session.authToken) {
    return res.json({ message: "user not logged in" });
  }
};
