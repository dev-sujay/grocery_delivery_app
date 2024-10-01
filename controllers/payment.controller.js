import { Payment } from '../models/payment.model.js';
import { Order } from '../models/order.model.js';

// Process Payment
export const processPayment = async (req, res) => {
  const { orderId, paymentMethod, amount, amountPaid, userId, paymentStatus } = req.body;

  try {
    const payment = new Payment({
      orderId,
      paymentMethod,
      amount,
      amountPaid,
      userId,
      paymentStatus
    });

    await payment.save();

    // Update order payment status
    await Order.findByIdAndUpdate(orderId, { paymentStatus});

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Payments for a User
export const getPaymentsByUser = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.params.userId }).populate('orderId');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Payment Status
export const updatePaymentStatus = async (req, res) => {
  const { paymentStatus } = req.body;

  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { paymentStatus },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
