// BuyButton.test.js
import { expect } from "vitest";
import { render } from "@testing-library/react";
import BuyButton from "./BuyButton";

describe("BuyButton Component", () => {
  it("renders the BuyButton component with the correct text", async () => {
    const { getByText } = render(<BuyButton />);

    // Assert that the component renders with the correct text
    expect(getByText("خــرید")).toBeVisible();
  });

  // You can add more tests based on your specific requirements
});
