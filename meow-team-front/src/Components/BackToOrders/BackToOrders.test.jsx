import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BackToOrders from "./BackToOrders";

test("renders BackToOrders component", () => {
  render(<BackToOrders />);

  // Check if the component renders the success message
  const successMessage = screen.getByText(/پرداخت شما با موفقیت انجام شد/i);
  expect(successMessage).toBeInTheDocument();

  // Check if the button is rendered
  const button = screen.getByRole("button", { name: /رفتن به سفارشات من/i });
  expect(button).toBeInTheDocument();
});

test('clicking the button should navigate to "/dashboard/:history"', () => {
  render(<BackToOrders />);

  // Mock the window.location.href property
  const originalLocation = window.location;
  delete window.location;
  window.location = { href: "" };

  // Trigger the button click
  const button = screen.getByRole("button", { name: /رفتن به سفارشات من/i });
  fireEvent.click(button);

  // Check if the navigation occurred
  expect(window.location.href).toBe("/dashboard/:history");

  // Restore the original window.location
  window.location = originalLocation;
});
