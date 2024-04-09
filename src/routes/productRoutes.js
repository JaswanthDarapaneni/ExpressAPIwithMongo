
const express = require('express');
const { createProduct, getAllProducts } =  require('../controllers/productController');
const verifyToken = require('../middlewares/authMiddleware');

const productRoutes = express.Router();

productRoutes.post('/create',verifyToken, createProduct);
productRoutes.get('/all',verifyToken, getAllProducts);
module.exports = { productRoutes };