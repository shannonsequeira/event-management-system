const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent, editEvent, deleteEvent, getEventById  } = require('../controllers/eventController');

// Routes
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', editEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
