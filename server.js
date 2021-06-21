/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const { connectMongo } = require("./src/db/connection");
const { postsRouter } = require("./src/routers/postsRouter");

const PORT = process.env.PORT || 8083;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, (error) => {
      if (error) {
        console.log("Error at server launch: ", error);
      }
      console.log(`Server is available at ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to launch an app with error: ${error.message}`);
  }
};

start();
