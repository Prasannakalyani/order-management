import { useEffect, useState } from "react";
import { getOrderStatus } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function OrderStatus() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await getOrderStatus(id);
        const orderData = res?.data || res;

        console.log("Order response:", orderData);

        if (orderData?.status) {
          setStatus(orderData.status);
        } else {
          setStatus("Order not found");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
        setStatus("Order not found");
      }
    };

    fetchStatus();

    const interval = setInterval(fetchStatus, 3000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Order Status</h2>

      <p className="mt-4 text-xl text-green-600">
        {status}
      </p>


      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
      >
        Go Back to Home
      </button>

      {status === "Delivered" && (
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Order Delivered – Go Home
        </button>
      )}
    </div>
  );
}