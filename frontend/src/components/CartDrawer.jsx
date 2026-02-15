import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, setIsOpen }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price}  {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

        
          {cart.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/checkout");
                }}
                className="w-full bg-black text-white py-3 rounded-xl mt-4 hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}