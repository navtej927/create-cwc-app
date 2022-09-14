const express = require("express");
const app = express();
const PORT = process.env.PORT || 4002;

const comments = [
  {
    userId: 1,
    data: "How are you brother",
  },
  {
    userId: 2,
    data: "I am very good",
  },
  {
    userId: 3,
    data: "lorem ipsum",
  },
  {
    userId: 4,
    data: "$65265478239",
  },
  {
    userId: 1,
    data: "I am fine broda!",
  },
];

app.get("/api/comments", (req, res) => {
  res.status(200).json(comments);
});

app.get("/api/comments/:userId", (req, res) => {
  const { userId } = req.params;
  const ans = comments.filter((_c) => _c.userId === parseInt(userId));
  res.status(200).json(ans);
});

app.listen(PORT, () => {
  console.log(`comments-api is listening on PORT ${PORT}`);
});
