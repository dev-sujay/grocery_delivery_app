import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactDetails: {
    type: String,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  rating: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const Store = model('Store', storeSchema);
