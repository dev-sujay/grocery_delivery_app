import express from 'express';
import {
    processPayment,
    getPaymentsByUser,
    updatePaymentStatus,
} from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/process', processPayment);
router.get('/user', getPaymentsByUser);
router.patch('/:id/status', updatePaymentStatus);

export default router;
