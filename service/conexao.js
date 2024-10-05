import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "eliel_projeto_01",
  password: "88797351_zZ",
  database: "libertadoresdb",
});

export default pool;
