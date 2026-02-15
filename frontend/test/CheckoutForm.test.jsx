import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("shows error if cart is empty", () => {
  render(
    <CartContext.Provider value={{ cart: [], clearCart: jest.fn() }}>
      <BrowserRouter>
        <CheckoutForm />
      </BrowserRouter>
    </CartContext.Provider>
  );

  fireEvent.click(screen.getByText("Place Order"));

  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
});