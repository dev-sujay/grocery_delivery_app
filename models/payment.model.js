import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'UPI', 'cash'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  transactionId: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

export const Payment = model('Payment', paymentSchema);
