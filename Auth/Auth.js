const router = require("express").Router();
const { Login, Logout } = require("../Controller/Controller");
router.post("/login", Login);
router.get("/logout", Logout);

module.exports = router;
