import { Delivery } from '../models/delivery.model.js';
import { Order } from '../models/order.model.js';
import { User } from '../models/user.model.js';

// Assign Delivery to an Order
export const assignDelivery = async (req, res) => {
  const { orderId } = req.body;

  try {
    const delivery = new Delivery(req.body);

    await delivery.save();

    // Update the order's delivery status
    await Order.findByIdAndUpdate(orderId, { deliveryStatus: 'assigned' });

    // record this delivery in the delivery agent's deliveryHistory
    await User.findByIdAndUpdate(req.user.userId, {
      $push: { deliveryHistory: delivery._id }
    });

    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Delivery Details by Order ID
export const getDeliveryByOrder = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({ orderId: req.params.orderId });
    if (!delivery) {
      return res.status(404).json({ msg: 'Delivery not found' });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Delivery Status
export const updateDeliveryStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const delivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!delivery) {
      return res.status(404).json({ msg: 'Delivery not found' });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
