const express = require("express");
const app = express();
const port = process.env.PORT || 7700;

const postRouter = require("./Routes/PostRoute");
const Auth = require("./Auth/Auth");
app.use(express.json());
app.use("/", postRouter);
app.use("/auth", Auth);

app.listen(port, () => {
  console.log(`server created at ${port}`);
});

app.get("/health", (_, res) => {
  res.send("health ok");
});
