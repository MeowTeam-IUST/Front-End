import { render, screen } from "@testing-library/react";
import PageLayout from "./PageLayout";

test("renders PageLayout with children", () => {
  render(<PageLayout>Test Child</PageLayout>);
  const childElement = screen.getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();
});

test("renders Header in PageLayout", () => {
  render(<PageLayout />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

test("renders Footer in PageLayout", () => {
  render(<PageLayout />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
