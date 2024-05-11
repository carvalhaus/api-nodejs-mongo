const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection with MongoDB failed!"));

db.once("open", () => {
  console.log("Connected with MongoDB");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
