/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const { postsRouter } = require("./src/routers/postsRouter");

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error at server launch: ", error);
  }
  console.log(`Server is available at ${PORT}`);
});
