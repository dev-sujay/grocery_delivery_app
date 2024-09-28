import express from 'express';
import {
    assignDelivery,
    getDeliveryByOrder,
    updateDeliveryStatus
} from '../controllers/delivery.controller.js';

const router = express.Router();

router.post('/', assignDelivery);
router.get('/:orderId', getDeliveryByOrder);
router.patch('/:id', updateDeliveryStatus);

export default router;
