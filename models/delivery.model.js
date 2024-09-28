import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const deliverySchema = new Schema({
  deliveryAgentId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  status: {
    type: String,
    enum: ['in-progress', 'delivered'],
    default: 'in-progress'
  },
  deliveryTime: {
    type: Date
  },
  trackingInfo: {
    type: String // You can add more fields for GPS tracking if needed
  },
  deliveryFee: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const Delivery = model('Delivery', deliverySchema);
