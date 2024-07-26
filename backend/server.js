const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const dbPassword = process.env.DB_PASSWORD;
const jwtSecret = process.env.JWT_SECRET;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

