// // authRoutes.js
// const express = require('express');
// const router = express.Router();
// const { loginUser, registerUser } = require('../controllers/authController');

// // Routes
// router.post('/login', loginUser);
// router.post('/register', registerUser);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // Adjust the path as needed

// Routes
router.post("/login", loginUser);
router.post("/register", registerUser);

// Profile routes
router.get("/profile", authMiddleware, (req, res) => {
  console.log("Returning user data:", req.user); // Log user data
  res.json(req.user);
});

module.exports = router;
