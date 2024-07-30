// userModel.js
const db = require('../config/db');

const User = {
  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) {
          return reject(err);
        }
        if (results.length === 0) {
          return resolve(null);
        }
        return resolve(results[0]);
      });
    });
  },
  
  create: (userData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
      db.query(query, [userData.name, userData.email, userData.password], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve({ id: results.insertId, ...userData });
      });
    });
  },

  // New method to find user by ID
  findById: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        if (results.length === 0) {
          return resolve(null);
        }
        return resolve(results[0]);
      });
    });
  }
};

module.exports = User;
