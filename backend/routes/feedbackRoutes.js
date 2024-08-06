const express = require("express");
const Feedback = require("../models/feedbackModel");

const router = express.Router();

// POST route to save feedback
router.post("/", (req, res) => {
  const feedbackData = {
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating,
    message: req.body.message,
  };

  Feedback.create(feedbackData, (err, result) => {
    if (err) {
      console.error("Error saving feedback:", err);
      return res.status(500).json({ error: "Failed to save feedback." });
    }
    res.status(201).json({
      message: "Feedback submitted successfully!",
      id: result.insertId,
    });
  });
});

module.exports = router;
