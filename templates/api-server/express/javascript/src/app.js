const express = require("express");
const morgan = require("morgan");
const packageJson = require("../package.json")

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({
    meta: {
      version: packageJson.version
    },
    data: null
  });
});

module.exports = {
  app,
};
