const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = (url) => {
  mongoose.connect(url);
  console.log("Successfull connected to database FIVERRR");
};

module.exports = connectDB;
