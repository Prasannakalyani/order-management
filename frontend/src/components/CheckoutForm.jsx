import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await placeOrder({
        customer: form,
        items: cart
      });

      console.log("Order Response:", data);

      clearCart();

    
      navigate(`/order/${data.orderId}`);

    } catch (err) {
      console.error(err);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Delivery Details
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border p-3 rounded-lg mb-4"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Address"
          required
          className="w-full border p-3 rounded-lg mb-4"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          className="w-full border p-3 rounded-lg mb-6"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}