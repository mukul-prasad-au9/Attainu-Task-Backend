const express = require("express");
const app = express();
const port = process.env.PORT || 7700;
const postRouter = require("./Routes/PostRoute");
app.use(express.json());
app.use("/", postRouter);
app.listen(port, () => {
  console.log(`server created at ${port}`);
});

app.get("/health", (_, res) => {
  res.send("health ok");
});
