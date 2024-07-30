// backend/models/userProfileModel.js
const db = require('../config/db');

// Fetch user profile by user ID
const getUserProfileByUserId = async (userId) => {
  try {
    const [rows] = await db.query('SELECT * FROM user_profiles WHERE user_id = ?', [userId]);
    if (rows.length > 0) {
      return rows[0]; // Return the first row if available
    } else {
      return {}; // Return an empty object if no rows found
    }
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Database query failed');
  }
};


// Update user profile
const updateUserProfile = async (userId, profileData) => {
  const { bio, contactNumber, profilePicture } = profileData;
  await db.query(
    'UPDATE user_profiles SET bio = ?, contact_number = ?, profile_picture = ? WHERE user_id = ?',
    [bio, contactNumber, profilePicture, userId]
  );
};

// Create a profile entry for a new user
const createProfile = async (userId) => {
  await db.query('INSERT INTO user_profiles (user_id) VALUES (?)', [userId]);
};

module.exports = { getUserProfileByUserId, updateUserProfile, createProfile };
