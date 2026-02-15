import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CheckoutForm from "./components/CheckoutForm";
import OrderStatus from "./components/OrderStatus";
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order/:id" element={<OrderStatus />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;