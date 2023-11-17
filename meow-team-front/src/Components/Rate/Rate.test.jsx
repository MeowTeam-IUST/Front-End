import React from "react";
import { render } from "@testing-library/react";
import Rate from "./Rate";
import { test, expect } from "vitest";

describe("Rate component", () => {
  const rate = 4;
  test("renders the SVG element", () => {
    const { container } = render(<Rate rate={rate} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    // Add more assertions for the SVG if needed
  });
});
