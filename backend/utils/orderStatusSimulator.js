const Order = require("../models/Order");

const simulateOrderProgress = async (orderId) => {
  const statuses = [
    "Preparing",
    "Out for Delivery",
    "Delivered"
  ];

  let delay = 15000;

  statuses.forEach((status, index) => {
    setTimeout(async () => {
      await Order.findByIdAndUpdate(orderId, { status });
      console.log(`Order ${orderId} updated to ${status}`);
    }, delay * (index + 1));
  });
};

module.exports = simulateOrderProgress;