require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const courseRoutes = require('./routes/courseRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

// Database connection
mongoose.connect("mongodb+srv://michaelgetu21:3dmIlVF5MeD9Hpp0@job-portal-web.l6cbkwp.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-web")
  .then(() => console.log("Database Connection"))
  .catch((err) => console.log("DB error", err));

// Middleware
app.use(cors({
  origin: ALLOWED_ORIGIN, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/courses', courseRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/cart', cartRoutes);
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
