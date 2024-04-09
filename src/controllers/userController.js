
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const config  = require('../env/config');

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, config.secretKey);
    return res.json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to login' });
  }
};

const getUserProfile = (req, res) => {
  res.json({ userId: req.body.userId });
};
const getUserworkingStatus = (req, res) => {
  res.json({status: "Working"});
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  getUserworkingStatus
};
