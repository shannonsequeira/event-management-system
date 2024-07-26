const cors = require('cors');

// Create a CORS middleware function
const corsMiddleware = cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

module.exports = corsMiddleware;
