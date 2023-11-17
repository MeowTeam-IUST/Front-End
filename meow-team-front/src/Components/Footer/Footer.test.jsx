import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer text correctly", () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(
      "هفت روز هفته 24 ساعت شبانه روز آماده پاسخگویی"
    );
    expect(footerText).toBeInTheDocument();
  });

  it("renders the contact information correctly", () => {
    const { getByText } = render(<Footer />);
    const contactText = getByText(
      /ارتباط با ما : ۰۲۱۴۴۳۲۲۵۹۵.*OpexShop@gmail.com/
    );
    expect(contactText).toBeInTheDocument();
  });

  it("renders the footer images correctly", () => {
    const { getByAltText } = render(<Footer />);
    const footerImage1 = getByAltText("image1");
    const footerImage2 = getByAltText("image2");
    expect(footerImage1).toBeInTheDocument();
    expect(footerImage2).toBeInTheDocument();
  });
});
