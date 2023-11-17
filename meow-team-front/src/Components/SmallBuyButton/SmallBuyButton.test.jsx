import React from "react";
import { render } from "@testing-library/react";
import BuyButton from "./SmallBuyButton";

describe("BuyButton component", () => {
    const { getByText } = render(<BuyButton />);

    const buttonElement = getByText("خــرید");
  it("renders the button with correct text", () => {
    

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe('خــرید')
  });
});
