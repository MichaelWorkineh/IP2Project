const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;



const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./serviceAccounts.json');


if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
}

const authenticateUser = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if(!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({message: "Unauthorized" + error.message});
  }
  const token =authorizationHeader.split('Bearer ')[1].trim();
  console.log(token);
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    console.log(decodedToken);
    req.user= {
      decodedToken,
      email: decodedToken.email,
      uid: decodedToken.uid
    }
    next();
  } catch(error) {
    console.log("error", error)
    res.status(401).json({message: "Unauthorized"+ error.message});
  }
};


// Database connection
mongoose.connect("mongodb+srv://michaelgetu21:3dmIlVF5MeD9Hpp0@job-portal-web.l6cbkwp.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-web")
  .then(() => console.log("Database Connection"))
  .catch((err) => console.log("DB error", err));


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.String, ref: 'User' },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.String, ref: 'User' },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Cart = mongoose.model('Cart', cartSchema);


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
  WhatYouLearn: String, // New field: What you'll learn
  audience: [String],
  videoDescription: {
    chapters: [{
      timestamp: String,
      title: String
    }],
    description: String
  },
  thumbnail: String, // New field: URL of the course thumbnail
  enrolledStudents: Number // New field: Number of enrolled students
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be temporarily stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing the uploaded file
  }
});
const upload = multer({ storage: storage });

// Route to handle course creation
app.post('/courses', upload.single('video'), async (req, res) => {
  try {
    const courseData = req.body;
    const { path: video } = req.file; // Get the path of the uploaded video file
    const { videoDescription, ...rest } = courseData;
    const course = new Course({ ...rest, video, videoDescription: JSON.parse(videoDescription) });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error('Error saving course:', error);
    res.status(500).json({ error: 'Failed to save course' });
  }
});

// Route to fetch all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Route to fetch a specific course by ID
app.get('/courses/:id', async (req, res) => {
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
});
app.post("/wishlist/add", authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  const { courseId } = req.body;
  try {
    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, courses: [] });
    }
    if (!wishlist.courses.includes(courseId)) {
      wishlist.courses.push(courseId);
      await wishlist.save();
      res.status(200).json({ message: "Course added to wishlist successfully" });
    } else {
      res.status(400).json({ message: "Course already exists in wishlist" });
    }
  } catch (error) {
    console.error("Error adding course to wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/wishlist", authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  try {
    const wishlist = await Wishlist.findOne({ userId }).populate('courses');
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    res.json(wishlist.courses);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/wishlist/remove/:courseId", authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  const { courseId } = req.params;
  try {
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    wishlist.courses = wishlist.courses.filter(id => id.toString() !== courseId);
    await wishlist.save();
    res.status(200).json({ message: "Course removed from wishlist successfully" });
  } catch (error) {
    console.error("Error removing course from wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to add a course to the cart
app.post("/cart/add", authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  const { courseId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, courses: [] });
    }

    if (!cart.courses.includes(courseId)) {
      cart.courses.push(courseId);
      await cart.save();
      res.status(200).json({ message: "Course added to cart successfully" });
    } else {
      res.status(400).json({ message: "Course already exists in cart" });
    }
  } catch (error) {
    console.error("Error adding course to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to fetch all courses in the cart
app.get("/cart", authenticateUser, async (req, res) => {
  const userId = req.user.uid;

  try {
    const cart = await Cart.findOne({ userId }).populate('courses');
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart.courses);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to remove a course from the cart
app.delete("/cart/remove/:courseId", authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  const { courseId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.courses = cart.courses.filter(id => id.toString() !== courseId);
    await cart.save();
    res.status(200).json({ message: "Course removed from cart successfully" });
  } catch (error) {
    console.error("Error removing course from cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});


app.use('/uploads', express.static('uploads'));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
