import { Product } from '../models/product.model.js';

// Add New Product
export const addProduct = async (req, res) => {
  const { name, description, price, category, availableStock, supplier, image, discount } = req.body;

  try {
    const product = new Product({
      name,
      description,
      price,
      category,
      availableStock,
      supplier,
      image,
      discount
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category supplier');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Get Single Product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category supplier');
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { name, description, price, availableStock, discount } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, availableStock, discount },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.status(200).json({ msg: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};
