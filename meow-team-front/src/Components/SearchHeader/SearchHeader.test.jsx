

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { SearchHeader } from "./SearchHeader";

// test("renders SearchHeader and performs search", () => {
//   const { getByPlaceholderText, getByText } = render(<SearchHeader />);

//   // Simulate typing into search input
//   fireEvent.change(getByPlaceholderText("جستجو در اپکس شاپ"), {
//     target: { value: "کلش" },
//   });

//   // Check if the search result is displayed
//   expect(getByText("کلش آف کلنز")).toBeInTheDocument();

//   // Simulate clicking on the search result
//   fireEvent.click(getByText("کلش آف کلنز"));

//   // Check if the URL has changed
//   expect(window.location.href).toBe("");
// });

test("renders SearchHeader and handles empty search", () => {
  const { getByPlaceholderText } = render(<SearchHeader />);

  // Simulate typing into search input
  fireEvent.change(getByPlaceholderText("جستجو در اپکس شاپ"), {
    target: { value: "" },
  });

  // Check if the search result is not displayed
  expect(document.querySelector(".searchresult")).toBeNull();
});
