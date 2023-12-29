import { test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AddToCart from "./AddToCart";

test("renders AddToCart component", () => {
  const { getByText } = render(
    <AddToCart id={1} CardDescription="Test Description" />
  );
  expect(getByText("Test Description")).toBeInTheDocument();
});

test("increments quantity on plus button click", async () => {
  const { getByAltText, getByText } = render(
    <AddToCart id={1} CardDescription="Test Description" />
  );
  const plusButton = getByAltText("plus");
  fireEvent.click(plusButton);
  expect(getByText("2")).toBeInTheDocument();
});

test("does not decrement quantity below 1", async () => {
  const { getByAltText, getByText } = render(
    <AddToCart id={1} CardDescription="Test Description" />
  );
  const negativeButton = getByAltText("negetive");
  fireEvent.click(negativeButton);
  expect(getByText("1")).toBeInTheDocument();
});

// You would need to mock the Requests().addInvoiceItem function to test AddToCartReq
