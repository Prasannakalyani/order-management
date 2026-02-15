import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
             Delicious food
          </h1>

          <div
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer"
          >
            🛒
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}