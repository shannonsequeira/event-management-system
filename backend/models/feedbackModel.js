const db = require("../config/db");

const Feedback = {
  create: (feedbackData, callback) => {
    const sql =
      "INSERT INTO feedback (name, email, rating, message) VALUES (?, ?, ?, ?)";
    db.query(
      sql,
      [
        feedbackData.name,
        feedbackData.email,
        feedbackData.rating,
        feedbackData.message,
      ],
      callback
    );
  },
};

module.exports = Feedback;
