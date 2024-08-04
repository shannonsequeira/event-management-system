const db = require("../config/db");

const Feedback = {
  create: (feedbackData, callback) => {
    const sql = "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)";
    db.query(
      sql,
      [feedbackData.name, feedbackData.email, feedbackData.message],
      callback
    );
  },
};

module.exports = Feedback;
