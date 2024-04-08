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
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price } = req.body;
        const product = new Product({ name, price });
        yield product.save();
        res.status(201).json({ message: 'Product created successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});
module.exports = {
    getAllProducts,
    createProduct,
};
