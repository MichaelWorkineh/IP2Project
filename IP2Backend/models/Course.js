const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  video: String,
  title: String,
  hours: Number,
  company: String,
  instructor: {
    userId: { type: String, required: true }, // Firebase UID of the authenticated instructor
    userEmail: { type: String, required: true } // Instructor's email
  },
  createdAt: { type: Date, default: Date.now }, 
  lastUpdated: { type: Date, default: Date.now }, 
  rating: Number,
  reviews: Number,
  price: Number,
  originalPrice: Number,
  requirements: [String],
  description: String,
  WhatYouLearn: String,
  audience: [String],
  videoDescription: {
    chapters: [{
      timestamp: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String }
    }],
    description: String
  },
  category: String, // New field for category
  thumbnail: String,
  enrolledStudents: Number
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
