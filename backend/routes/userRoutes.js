const express = require('express');
const { getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', protect, getMe);

module.exports = router;
