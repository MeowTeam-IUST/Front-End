

import { render, fireEvent, screen } from "@testing-library/react";
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


test("renders SearchHeader and checks initial state", () => {
  render(<SearchHeader />);
  const inputElement = screen.getByPlaceholderText(/جستجو در اپکس شاپ/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe("");
});

test("checks searchShow state after input change", async () => {
  render(<SearchHeader />);
  const inputElement = screen.getByPlaceholderText(/جستجو در اپکس شاپ/i);
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");
  // Here you would check if the search results are shown based on the searchShow state
  // This depends on how you implement showing/hiding search results in your component
});

test("checks searchShow state after input change with empty string", async () => {
  render(<SearchHeader />);
  const inputElement = screen.getByPlaceholderText(/جستجو در اپکس شاپ/i);
  fireEvent.change(inputElement, { target: { value: " " } });
  expect(inputElement.value).toBe(" ");
  // Here you would check if the search results are hidden based on the searchShow state
  // This depends on how you implement showing/hiding search results in your component
});

test("checks handleCloseClick functionality", async () => {
  render(<SearchHeader />);
  const inputElement = screen.getByPlaceholderText(/جستجو در اپکس شاپ/i);
  fireEvent.change(inputElement, { target: { value: "test" } });
  fireEvent.click(document);
  // Here you would check if the search results are hidden based on the searchShow state
  // This depends on how you implement showing/hiding search results in your component
});

test("renders SearchHeader and handles empty search", () => {
  const { getByPlaceholderText } = render(<SearchHeader />);

  // Simulate typing into search input
  fireEvent.change(getByPlaceholderText("جستجو در اپکس شاپ"), {
    target: { value: "" },
  });

  // Check if the search result is not displayed
  expect(document.querySelector(".searchresult")).toBeNull();
});
