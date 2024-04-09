const express = require('express');
const mongoose = require('mongoose');
const { productRoutes } = require("./routes/productRoutes");
const { userRoutes } = require("./routes/userRoutes");
const config = require("./env/config")

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

app.get('/', (req, res) => {
  url = process.env.PORT;
  htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Overview</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
    }
    h1, h2 {
      color: #333;
    }
    p {
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      padding-left: 20px;
    }
    a {
      color: #007bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Project Overview</h1>
  <p>This project is a Node.js web application built with Express.js and MongoDB. It provides APIs for managing users and products. Below is an overview of the project structure and how to run it.</p>

  <h2>Project Structure</h2>
  <ul>
    <li><strong>app.js</strong>: Main entry point of the application.</li>
    <li><strong>routes</strong>: Directory containing route handlers for different endpoints.</li>
    <li><strong>env</strong>: Directory containing environment configuration files.</li>
    <li><strong>models</strong>: Directory containing Mongoose models for defining data schemas.</li>
    <li><strong>controllers</strong>: Directory containing controller functions for handling business logic</li>
    <li><strong>middleware</strong>: Directory containing custom middleware functions.</li>
  </ul>

  <h2>Setup</h2>
  <ol>
    <li>Clone the repository from GitHub.</li>
    <li>Install dependencies using <code>npm install</code> or <code>yarn install</code>.</li>
    <li>Configure MongoDB connection in <code>env/config.js</code>.</li>
    <li>Start the server using <code>npm start</code> or <code>yarn start</code>.</li>
  </ol>

  <h2>Endpoints</h2>
  <ul>
    <li><a href="/api/user/register">POST: /api/user/register</a>: Register Users.</li>
    <li><a href="/api/user/login">POST: /api/user/login</a>: Login user , it return Token store it </li>
    <h2>Only AUTHORIZED users will be access </h2>
    <li><a href="/api/user/profile">GET: /api/user/profile</a>: Send token in header Authorization: Bearer "token"  return the logined user id</li>
    <li><a href="/api/product/create">POST: /api/product/create</a>: It create product. Send token in header Authorization: Bearer "token",  </li>
    <li><a href="/api/product/all">GET: /api/product/all</a>: It return all products. Send token in header Authorization: Bearer "token",  </li>
  </ul>
Note: Check this endPoints in PostMan or TelentApi
<h2>Application Hosted at: <a>https://expressapiwithmongo.onrender.com</a></h2>
  <h2>Deployment</h2>
  <ol>
    <li>Sign up for a Render account.</li>
    <li>Create a new web service and link it to your GitHub repository.</li>
    <li>Configure environment variables for MongoDB connection.</li>
    <li>Deploy the service.</li>
  </ol>

</body>
</html>

  `

  res.send(htmlContent);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
