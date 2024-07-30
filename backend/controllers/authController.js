// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Model for interacting with the users table
const UserProfile = require('../models/userProfileModel'); // Model for interacting with the user_profiles table

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findByEmail(email); // Ensure this method checks the users table
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = {
      name,
      email,
      password: hashedPassword
    };

    // Save user to database
    const savedUser = await User.create(newUser); // Save to users table

    // Optionally create a profile for the new user in user_profiles table
    await UserProfile.createProfile(savedUser.id); // Make sure this method exists in userProfileModel.js

    // Generate JWT token
    const token = jwt.sign({ id: savedUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Log in a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findByEmail(email); // Ensure this method checks the users table
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };
