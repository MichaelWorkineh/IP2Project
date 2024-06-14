const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
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
};

const getCart = async (req, res) => {
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
};

const removeFromCart = async (req, res) => {
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
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};
