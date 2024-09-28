import {Cart} from '../models/cart.model.js';

// Add item to cart
export const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $addToSet: { items: { productId, quantity } } },
            { new: true, upsert: true }
        );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user's cart
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update item quantity in cart
export const updateCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId, 'items.productId': productId },
            { $set: { 'items.$.quantity': quantity } },
            { new: true }
        );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { items: { productId } } },
            { new: true }
        );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
