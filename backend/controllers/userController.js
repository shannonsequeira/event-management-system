// userController.js
const User = require("../models/User"); // Adjust the path based on your project structure

// Function to get user data
exports.getUser = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you're using middleware to get the user ID from the token
    const user = await User.findById(userId); // Fetch user from the database
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send the user data as a response
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
