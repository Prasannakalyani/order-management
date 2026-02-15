const Order = require("../models/Order");
const simulateOrderProgress = require("../utils/orderStatusSimulator");

exports.createOrder = async (req, res) => {
  try {
    const { customer, items } = req.body;

    if (!customer || !items || items.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const totalAmount = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      customer,
      items,
      totalAmount
    });

    simulateOrderProgress(order._id);

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      status: order.status,
      totalAmount: order.totalAmount,
      createdAt: order.createdAt
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};