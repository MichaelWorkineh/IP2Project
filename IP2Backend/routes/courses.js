const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// POST endpoint to add a course
router.post('courses/', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
