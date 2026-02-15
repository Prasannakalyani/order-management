import { render, screen } from "@testing-library/react";
import OrderStatus from "./OrderStatus";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("renders Order Status heading", () => {
  render(
    <BrowserRouter>
      <OrderStatus />
    </BrowserRouter>
  );

  expect(screen.getByText("Order Status")).toBeInTheDocument();
});