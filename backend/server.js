const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
require('./config/database');

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/media', require('./routes/media.routes'));
app.use('/api/analytics', require('./routes/analytics.routes'));
app.use('/api/scheduler', require('./routes/scheduler.routes'));
app.use('/api/trending', require('./routes/trending.routes'));

// Error handling middleware
app.use(require('./middleware/error.middleware'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
