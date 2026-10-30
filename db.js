const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'campuseats'
});

module.exports = pool;