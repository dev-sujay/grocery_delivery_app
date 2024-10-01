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
    enum: ['assigned', 'in-progress', 'delivered'],
    default: 'assigned'
  },
  deliveryTime: {
    type: Date,
    required: true
  },
  deliveryFee: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const Delivery = model('Delivery', deliverySchema);
