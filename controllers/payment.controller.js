import { Payment } from '../models/payment.model.js';
import { Order } from '../models/order.model.js';

// Process Payment
export const processPayment = async (req, res) => {
  const { orderId, paymentMethod, amount, status } = req.body;

  try {
    const payment = new Payment({
      orderId,
      paymentMethod,
      amount,
      status
    });

    await payment.save();

    // Update order payment status
    await Order.findByIdAndUpdate(orderId, { paymentStatus: 'Paid' });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Get Payments for a User
export const getPaymentsByUser = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id }).populate('orderId');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Update Payment Status
export const updatePaymentStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};
