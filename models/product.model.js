import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  availableStock: {
    type: Number,
    required: true
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  },
  image: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const Product = model('Product', productSchema);
