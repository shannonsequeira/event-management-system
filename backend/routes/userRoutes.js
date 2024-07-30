const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes
router.get('/profile', authMiddleware, getUserProfile);
router.put('/edit-profile', authMiddleware, updateUserProfile);

module.exports = router;