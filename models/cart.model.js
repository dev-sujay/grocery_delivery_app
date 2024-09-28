import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cartSchema = new Schema({
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
  totalPrice: {
    type: Number,
    required: true
  },
  discounts: [{
    type: Schema.Types.ObjectId,
    ref: 'Discount'
  }]
}, {
  timestamps: true
});

export const Cart = model('Cart', cartSchema);
