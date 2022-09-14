const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4001;

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/", async (req, res) => {
  res.send(JSON.stringify({ ok: 1 }));
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  console.log("users", users);
  res.status(200);
  res.send(JSON.stringify(users));
});

const mongoDBURL = `mongodb://root:rootp@mongo:27017/users?authSource=admin`;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to the DB");
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  })
  .catch((err, a) => {
    console.log(err, a);
  });
