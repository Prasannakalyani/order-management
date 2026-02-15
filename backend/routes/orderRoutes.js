const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getAllOrders
} = require("../controllers/orderController");

router.post("/orders", createOrder);
router.get("/orders/:id", getOrderById);
router.get("/orders", getAllOrders);

module.exports = router;