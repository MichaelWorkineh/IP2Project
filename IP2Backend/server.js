const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000 ;

mongoose.connect("mongodb+srv://michaelgetu21:3dmIlVF5MeD9Hpp0@job-portal-web.l6cbkwp.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-web").then(console.log("Database COnnection")).catch((err)=>console.log("Db error",err));

//michaelgetu21
//YNqhcMQHgu8LrZs2

//

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const Course = mongoose.model('Course', {
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

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the directory where files will be temporarily stored

app.post('/courses', upload.single('video'), async (req, res) => {
  try {
    const courseData = req.body;
    const videoUrl = req.file.path; // Get the path of the uploaded video file
    const course = new Course({ ...courseData, videoUrl });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error('Error saving course:', error);
    res.status(500).json({ error: 'Failed to save course' });
  }
});


  app.get('/courses', async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'Failed to fetch courses' });
    }
  });

  app.get('/courses/:_id', async (req, res) => {
  const courseId = req.params._id;

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
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});