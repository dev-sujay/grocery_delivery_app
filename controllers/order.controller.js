import { Order } from '../models/order.model.js';

// Place New Order
export const placeOrder = async (req, res) => {
  const { items, totalAmount, deliveryAddress } = req.body;

  try {
    const order = new Order({
      userId: req.user.id,
      items,
      totalAmount,
      deliveryAddress
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Get All Orders for a User
export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.status(200).json({ msg: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
};
