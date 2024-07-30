const express = require('express');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const corsMiddleware = require('./middleware/corsMiddleware');
require('dotenv').config();

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes); // Ensure userRoutes is properly used
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads folder

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
