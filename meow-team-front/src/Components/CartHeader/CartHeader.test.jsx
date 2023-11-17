// CartHeader.test.js
import { expect } from "vitest";
import { render } from "@testing-library/react";
import CartHeader from "./CartHeader";

describe("CartHeader Component", () => {
  it("renders the CartHeader component with the shopping cart icon", async () => {
    const { getByAltText } = render(<CartHeader />);

    // Assert that the component renders with the shopping cart icon
    const shoppingCartIcon = getByAltText("Shopping Cart");
    expect(shoppingCartIcon).toBeVisible();
    expect(shoppingCartIcon.src).toContain("shopping-cart.svg");
  });

  // You can add more tests based on your specific requirements
});
