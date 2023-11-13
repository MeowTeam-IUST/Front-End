import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./Footer"; // Adjust the import path accordingly

describe("Footer Component", () => {
  test("renders the Footer component correctly", () => {
    const { getByText, getByAltText } = render(<Footer />);

    // Check if the text elements are rendered
    expect(
      getByText("هفت روز هفته 24 ساعت شبانه روز آماده پاسخگویی")
    ).toBeInTheDocument();
    expect(
      getByText("ارتباط با ما : ۰۲۱۴۴۳۲۲۵۹۵       OpexShop@gmail.com")
    ).toBeInTheDocument();

    // Check if the images are rendered
    expect(getByAltText("footer")).toBeInTheDocument();
    expect(getByAltText("support")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
