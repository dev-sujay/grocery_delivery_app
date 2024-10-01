import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin', 'deliveryAgent'],
        default: 'customer'
    },
    password: {
        type: String,
        required: true
    },
    orderHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    deliveryHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Delivery'
    }],
    location : {
        lattitude : {
            type : Number,
        },
        longitude : {
            type : Number,
        }
    }
}, {
    timestamps: true
});

export const User = model('User', userSchema);
