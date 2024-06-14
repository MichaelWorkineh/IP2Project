const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const authenticateUser = require('../middlewares/authenticateUser');

router.post('/add', authenticateUser, addToCart);
router.get('/', authenticateUser, getCart);
router.delete('/remove/:courseId', authenticateUser, removeFromCart);

module.exports = router;
