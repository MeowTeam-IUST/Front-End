import { test , describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import DashboardSidebar from "./DashboardSidebar";

// Sample items for testing
const items = [
  { icon: "icon1.png", name: "Item 1" },
  { icon: "icon2.png", name: "Item 2" },
  // Add more items as needed
];

let choosenItem = 0;

const setChoosenItem = (index) => {
  choosenItem = index;
};

describe("DashboardSidebar", () => {
  test("renders without crashing", () => {
    render(
      <DashboardSidebar
        setChoosenItem={setChoosenItem}
        items={items}
        choosenItem={choosenItem} // Set initial choosenItem as needed
      />
    );
  });

  test("handles item click correctly", () => {
    const { getByText } = render(
      <DashboardSidebar
        setChoosenItem={setChoosenItem}
        items={items}
        choosenItem={choosenItem}
      />
    );

    // Click on the second item (index 1)
    fireEvent.click(getByText("Item 2"));

    // Ensure that setChoosenItem is called with the correct index
    test(choosenItem, 1);
  });

});
