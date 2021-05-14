const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Attainu",
  password: "2601",
  port: "6700",
});

module.exports = pool;
