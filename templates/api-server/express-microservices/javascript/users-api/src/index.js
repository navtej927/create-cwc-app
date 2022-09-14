const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

const users = [
  {
    id: 1,
    name: "Navtej",
  },
  {
    id: 2,
    name: "Navjot",
  },
  {
    id: 3,
    name: "jaismeen",
  },
  {
    id: 4,
    name: "sandy",
  },
];

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const ans = users.find((_c) => _c.id === parseInt(id));

  res.status(200).json(ans);
});

app.listen(PORT, () => {
  console.log(`users-api is listening on PORT ${PORT}`);
});
