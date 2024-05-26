const Course = require('../models/Course');

const createCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const { path: video } = req.file;
    const { videoDescription, ...rest } = courseData;
    const instructor = {
      userId: req.user.uid,
      userEmail: req.user.email
    };
    const course = new Course({
      ...rest,
      video,
      instructor,
      videoDescription: JSON.parse(videoDescription)
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error('Error saving course:', error);
    res.status(500).json({ error: 'Failed to save course' });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

const getCourseById = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById
};
