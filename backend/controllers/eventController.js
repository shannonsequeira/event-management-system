const db = require('../config/db');

exports.getAllEvents = (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createEvent = (req, res) => {
  const { title, date, location } = req.body;
  const query = 'INSERT INTO events (title, date, location) VALUES (?, ?, ?)';
  db.query(query, [title, date, location], (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, title, date, location });
  });
};
