const express = require('express');
const router = express.Router();
const { addToWishlist, getWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const authenticateUser = require('../middlewares/authenticateUser');

router.post('/add', authenticateUser, addToWishlist);
router.get('/', authenticateUser, getWishlist);
router.delete('/remove/:courseId', authenticateUser, removeFromWishlist);

module.exports = router;
