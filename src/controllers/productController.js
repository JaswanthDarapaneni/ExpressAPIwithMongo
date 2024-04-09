const Product = require('../models/productModel')

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const creator = req.body.userId;
    const product = new Product({ name, price, creator });
    await product.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    if (req.body.userId) {
      const products = await Product.find();
      res.json(products);
    } else {
      res.status(501).json({ error: 'UnAuthorized' })
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }

};

module.exports = {
  getAllProducts,
  createProduct,
};
