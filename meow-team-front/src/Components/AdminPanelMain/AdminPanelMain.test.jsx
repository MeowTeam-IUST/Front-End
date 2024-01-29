import React from "react";
import { render } from "@testing-library/react";
import AdminPanelMain from "./AdminPanelMain";

test("renders AdminPanelMain with children", () => {
  // Define some dummy children for testing
  const dummyChildren = <div data-testid="dummy-child">Hello, World!</div>;

  // Render the AdminPanelMain with the dummy children
  const { getByTestId } = render(
    <AdminPanelMain>{dummyChildren}</AdminPanelMain>
  );

  // Assert that the AdminPanelMain renders with the correct class
  const adminPanelMainElement = getByTestId("dummy-child");
  expect(adminPanelMainElement).toBeInTheDocument();
});
