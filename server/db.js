require("dotenv").config();

const Pool = require('pg').Pool;
const pool = new Pool({
user: process.env.DB_USER,
host: 'localhost',
database: process.env.REACT_APP_DB_NAME,
password: process.env.REACT_APP_DB_PASSWORD,
port: 5432
})
module.exports = pool;