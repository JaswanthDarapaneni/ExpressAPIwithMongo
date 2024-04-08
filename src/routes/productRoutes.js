
const express = require('express');
const { createProduct, getAllProducts } =  require('../controllers/productController');

const productRoutes = express.Router();

productRoutes.post('/create', createProduct);
productRoutes.get('/all', getAllProducts);
module.exports = { productRoutes };