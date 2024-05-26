const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createCourse, getCourses, getCourseById } = require('../controllers/courseController');
const authenticateUser = require('../middlewares/authenticateUser');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

router.post('/', authenticateUser, upload.single('video'), createCourse);
router.get('/', getCourses);
router.get('/:id', getCourseById);

module.exports = router;
