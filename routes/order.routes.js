import express from 'express';
import {
    placeOrder,
    getOrdersByUser,
    updateOrderStatus,
    deleteOrder,
} from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getOrdersByUser);
router.patch('/:id/status', updateOrderStatus);
router.delete('/:id', deleteOrder);

export default router;
