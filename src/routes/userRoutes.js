
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController')
const verifyToken = require('../middlewares/authMiddleware');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/profile', verifyToken, getUserProfile);

module.exports = { userRoutes };