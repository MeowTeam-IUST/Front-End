import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect } from "chai";
import WalletFail from "./WalletFail";

describe("WalletFail component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<WalletFail />);

    // Assert that the text is rendered correctly
    expect(getByText("موجودی حساب شما کافی نیست!")).to.exist;
  });

  it("handles button click", () => {
    const { getByText } = render(<WalletFail />);

    // Mock the window.location.href property
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: "" };

    // Trigger button click
    fireEvent.click(getByText("افزایش موجودی کیف پول"));

    // Assert that the window location was updated
    expect(window.location.href).to.equal("/dashboard/:wallet");

    // Restore the original window.location
    window.location = originalLocation;
  });
});
