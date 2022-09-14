const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
const port = 4001;

app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  res.send(JSON.stringify({ ok: 1 }));
});

app.get("/users", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM users");
    res.status(200).json({
      data: {
        users: results.rows,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await db.query("SELECT * FROM users WHERE id=$1", [id]);
    res.status(200);
    res.status(200).json({
      data: {
        user: results,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id/comments", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await db.query(
      "SELECT * FROM users INNER JOIN comments ON users.id = comments.user_id;"
    );

    res.status(200).json({
      data: {
        comments: results.rows,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.get("/comments", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM comments");

    res.status(200).json({
      data: {
        comments: results.rows,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
