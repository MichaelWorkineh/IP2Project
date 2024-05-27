const Wishlist = require('../models/Wishlist');

const addToWishlist = async (req, res) => {
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
};

const getWishlist = async (req, res) => {
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
};

const removeFromWishlist = async (req, res) => {
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
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist
};
