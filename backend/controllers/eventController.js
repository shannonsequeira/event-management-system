const db = require('../config/db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage }).fields([
  { name: 'photos', maxCount: 1 },
  { name: 'video_content', maxCount: 1 }
]);

exports.getAllEvents = (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createEvent = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload failed' });
    }
    const {
      title, description, schedule, start_date, end_date, location, venue, ticket_amount, capacity, user_id
    } = req.body;
    const photos = req.files['photos'] ? req.files['photos'][0].filename : null;
    const video_content = req.files['video_content'] ? req.files['video_content'][0].filename : null;
    const query = 'INSERT INTO events (title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id], (err, results) => {
      if (err) throw err;
      res.status(201).json({ id: results.insertId, title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id });
    });
  });
};

exports.getEventById = (req, res) => {
  console.log(`Fetching event with ID: ${req.params.id}`);
  const { id } = req.params;
  const query = 'SELECT * FROM events WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(results[0]);
  });
};

exports.editEvent = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload failed' });
    }
    const { id } = req.params;
    const {
      title, description, schedule, start_date, end_date, location, venue, ticket_amount, capacity, user_id
    } = req.body;
    const photos = req.files['photos'] ? req.files['photos'][0].filename : req.body.photos;
    const video_content = req.files['video_content'] ? req.files['video_content'][0].filename : req.body.video_content;
    const query = 'UPDATE events SET title = ?, description = ?, schedule = ?, start_date = ?, end_date = ?, location = ?, venue = ?, photos = ?, video_content = ?, ticket_amount = ?, capacity = ?, user_id = ? WHERE id = ?';
    db.query(query, [title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id, id], (err, results) => {
      if (err) throw err;
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json({ id, title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id });
    });
  });
};

exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM events WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  });
};
