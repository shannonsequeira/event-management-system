const db = require("./db");

// Function to create the feedback table if it does not exist
const createFeedbackTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS feedback (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  db.query(sql, (err) => {
    if (err) {
      console.error("Error creating feedback table:", err);
      return;
    }
    console.log("Feedback table created or already exists.");
  });
};

// Call the function to create the table
createFeedbackTable();
