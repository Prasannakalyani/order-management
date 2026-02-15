import axios from "axios";

const API = axios.create({
  baseURL:  "http://localhost:5000/api/orders",
  headers: {
    "Content-Type": "application/json"
  }
});

// Place Order
export const placeOrder = async (data) => {
  const response = await API.post("/orders", data);
  return response.data;
};

// Get Order Status
export const getOrderStatus = async (id) => {
  const response = await API.get(`/orders/${id}`);
  return response.data;
};

// Get All Orders (Optional Admin)
export const getAllOrders = async () => {
  const response = await API.get("/orders");
  return response.data;
};

export default API;