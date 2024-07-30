const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];
  
  // Check if the token is provided
  if (!token) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decoded:', decoded);

    // Find the user based on the decoded ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ msg: 'Invalid token' });
    }

    // Attach user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
