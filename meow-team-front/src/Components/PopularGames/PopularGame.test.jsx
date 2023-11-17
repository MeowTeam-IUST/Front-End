import React from "react";


import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import PopularGame from "./PopularGame";

describe("PopularGame", () => {
  test("renders PopularGame component with the correct name", () => {
    const testName = "Test Game";
    render(<PopularGame name={testName} />);

    // Check if the component renders with the correct name
   
    expect(screen.getByText(testName)).toBeInTheDocument();
  });

//   test("calls HandleClick when clicked", () => {
//     const testName = "Test Game";
//     const handleClickMock = jest.fn();

//     render(<PopularGame name={testName} onClick={handleClickMock} />);

//     // Simulate a click event on the component
//     fireEvent.click(screen.getByText(testName));

//     // Check if HandleClick was called
//     expect(handleClickMock).toHaveBeenCalledTimes(1);
//   });

});
