const db = require('../config/db');

const Event = {
  create: (data, callback) => {
    const query = 'INSERT INTO events SET ?';
    db.query(query, data, callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM events';
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM events WHERE id = ?';
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE events SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM events WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Event;
