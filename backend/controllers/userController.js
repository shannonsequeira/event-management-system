const db = require('../config/db'); // Make sure to export and configure your MySQL connection here

// Get user profile with additional profile details
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Query to get user data
    const userQuery = 'SELECT * FROM users WHERE id = ?';
    const [userResults] = await db.query(userQuery, [userId]);
    const user = userResults[0]; // Assuming there's only one user

    // Query to get user profile data
    const profileQuery = 'SELECT * FROM user_profiles WHERE user_id = ?';
    const [profileResults] = await db.query(profileQuery, [userId]);
    const userProfile = profileResults[0]; // Assuming there's only one profile

    res.json({ ...user, ...userProfile }); // Combine user and profile data
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profileData = req.body;

    // Update profile data in the database
    const profileQuery = 'UPDATE user_profiles SET ? WHERE user_id = ?';
    await db.query(profileQuery, [profileData, userId]);

    // Send success response
    res.json({ msg: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
