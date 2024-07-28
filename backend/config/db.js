const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'event_management'
});
db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});
module.exports = db;
