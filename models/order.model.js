import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered'],
    default: 'pending'
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  estimatedDeliveryTime: {
    type: Date
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export const Order = model('Order', orderSchema);
