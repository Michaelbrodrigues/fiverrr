const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connectDB");
const port = process.env.PORT;
const db_url = process.env.CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("Welcome to the desert of the real!");
});

const start = async () => {
  try {
    await connectDB(db_url);
    app.listen(port, () => {
      console.log(`Server started on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
    handleError(err);
  }
};

start();
