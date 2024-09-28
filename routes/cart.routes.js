import express from 'express';
import {
    addToCart,
    getCart,
    updateCartItem,
    removeFromCart,
} from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', getCart);
router.patch('/update', updateCartItem);
router.delete('/remove', removeFromCart);

export default router;
