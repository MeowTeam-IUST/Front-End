// Add.test.js
import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Add from "./Add";

describe("Add Component", () => {
  it("renders the Add component with the correct initial state", async () => {
    const { queryByText } = render(<Add />);

    // Assert that the component initially does not show the popup
    expect(queryByText("اطلاعات کارت")).toBeNull();
  });

  it('opens the popup when the "+" button is clicked', async () => {
    const { getByText } = render(<Add />);

    // Click the "+" button
    fireEvent.click(getByText("+"));

    // Assert that the popup is displayed
    expect(getByText("اطلاعات کارت")).toBeVisible();
  });

  it('closes the popup when the "Close" button is clicked', async () => {
    const { getByText, queryByText } = render(<Add />);

    // Open the popup
    fireEvent.click(getByText("+"));

    // Assert that the popup is displayed
    expect(getByText("اطلاعات کارت")).toBeVisible();

    // Click the "Close" button
    fireEvent.click(getByText("Close"));

    // Assert that the popup is closed
    expect(queryByText("اطلاعات کارت")).toBeNull();
  });

  // You can add more tests based on your specific requirements
});
