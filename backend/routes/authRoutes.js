const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/userModel"); // Import User model

// Routes
router.post("/login", loginUser);
router.post("/register", registerUser);

// Profile route
router.get("/user", authMiddleware, async (req, res) => {
  try {
    console.log("Profile route hit");
    console.log("Request headers:", req.headers);
    console.log("Request URL:", req.url);
    console.log("User ID:", req.user.id);

    // Fetch the full user profile from the database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
