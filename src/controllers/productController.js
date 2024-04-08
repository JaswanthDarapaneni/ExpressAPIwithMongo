

 const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price});
    await product.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create product' });
  }
};

 const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }

};

module.exports = {
  getAllProducts,
  createProduct,
};
