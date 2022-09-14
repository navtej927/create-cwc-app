const { Pool } = require("pg");

const pool = new Pool({
  password: "root",
  user: "root",
  host: "postgres",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
