const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
});

module.exports = pool;
