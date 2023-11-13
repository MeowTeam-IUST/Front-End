import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import LittleCart from "./LittleCart";

describe("LittleCart", () => {
  const mockProps = {
    name: "Test Name",
    image: "Test Image",
    showPopup: true,
  };

//   test("renders correctly", () => {
//     render(<LittleCart {...mockProps} />);
//     expect(screen.getByText(mockProps.name)).toBeInTheDocument();
//   });

//   test("renders with correct background image", () => {
//     render(<LittleCart {...mockProps} />);
//     const divElement = screen.getByText(mockProps.name).parentElement
//       .parentElement;
//     expect(divElement).toHaveStyle(`background-image: url(${mockProps.image})`);
//   });

//   test("renders with correct class when showPopup is true", () => {
//     render(<LittleCart {...mockProps} />);
//     const divElement = screen.getByText(mockProps.name).parentElement;
//     expect(divElement).toHaveClass("GameTitlePopupOpen");
//   });

test("renders with correct class when showPopup is true", () => {
  render(<LittleCart {...mockProps} />);
  const divElement = screen.getByText(mockProps.name).parentElement;
  const className = divElement.className;
  expect(className.includes("GameTitlePopupOpen")).toBeTruthy();
});

});
