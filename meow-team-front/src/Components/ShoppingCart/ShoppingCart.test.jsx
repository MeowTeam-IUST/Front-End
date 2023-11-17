import React from "react";
import { render } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart component", () => {
  it("renders the progress bar with correct images", () => {
    const { getAllByAltText } = render(<ShoppingCart />);

    const progressImages = getAllByAltText("");

    
    expect(progressImages[0].src).toContain("progress.png");
    expect(progressImages[1].src).toContain("line.png");
    expect(progressImages[2].src).toContain("progress.png");
  });
});
