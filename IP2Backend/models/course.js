const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  video: String,
  title: String,
  hours: String,
  company: String,
  instructor: String,
  lastUpdated: String,
  rating: String,
  reviews: Number,
  price: Number,
  originalPrice: Number,
  requirements: [String],
  description: String,
  audience: [String]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
