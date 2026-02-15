import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function MenuCard({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition duration-300 overflow-hidden">
      <img src={item.image} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-600">
            ₹{item.price}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}