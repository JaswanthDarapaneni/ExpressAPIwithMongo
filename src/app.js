const express = require('express');
const mongoose = require('mongoose');
const { productRoutes } = require("./routes/productRoutes");
const { userRoutes } = require("./routes/userRoutes");
const config = require("./config")

const app = express();
app.use(express.json());

mongoose.connect(config.databaseURL)
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
