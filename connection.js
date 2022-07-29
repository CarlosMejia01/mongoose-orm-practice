const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/mywebstore";
const db = mongoose.connection;

mongoose.connect(uri).catch(err => console.log(err));

db.once("open", (_) => {
  console.log("Database is connected to ", uri);
});

db.on("error", (err) => {
  console.log(err);
});
