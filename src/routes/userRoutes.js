
const express = require('express');
const { registerUser, loginUser, getUserProfile, getUserworkingStatus } = require('../controllers/userController')
const verifyToken = require('../middlewares/authMiddleware');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/profile', verifyToken, getUserProfile);
userRoutes.get('WorkingStatus', getUserworkingStatus )

module.exports = { userRoutes };