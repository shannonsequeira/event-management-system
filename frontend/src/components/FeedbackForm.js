import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Check if a rating is selected
    if (!rating) {
      setError("Please select a rating.");
      return; // Prevent submission if rating is not selected
    }

    try {
      await axios.post("http://localhost:5000/api/feedback", {
        name,
        email,
        rating,
        message,
      });
      setSuccess("Feedback submitted successfully!");
      setName("");
      setEmail("");
      setRating("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setError("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Please provide your feedback on the quality of our service.
          </label>
          <div style={styles.radioGroup}>
            {["Excellent", "Very Good", "Good", "Average", "Poor"].map(
              (option) => (
                <label key={option} style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="rating"
                    value={option}
                    checked={rating === option}
                    onChange={(e) => setRating(e.target.value)}
                    required
                    style={styles.radioInput}
                  />
                  {option}
                </label>
              )
            )}
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Your Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Feedback"
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  radioLabel: {
    marginRight: "10px",
  },
  radioInput: {
    marginRight: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    marginTop: "10px",
    color: "red",
  },
  success: {
    marginTop: "10px",
    color: "green",
  },
};

export default FeedbackForm;
