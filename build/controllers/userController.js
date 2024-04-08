"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { config } = require('../env/config');
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const hashedPassword = yield bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        yield user.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const validPassword = yield bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user._id }, config.secretKey);
        return res.json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to login' });
    }
});
const getUserProfile = (req, res) => {
    res.json({ userId: req.body.userId });
};
const getUserworkingStatus = (req, res) => {
    res.json({ status: "Working" });
};
module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    getUserworkingStatus
};
