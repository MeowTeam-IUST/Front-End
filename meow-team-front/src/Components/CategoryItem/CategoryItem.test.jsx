// CategoryItem.test.js
import { expect } from "vitest";
import { render } from "@testing-library/react";
import CategoryItem from "./CategoryItem";

describe("CategoryItem Component", () => {
  it("renders with the provided title", async () => {
    const title = "Test Category";
    const { getByText } = render(<CategoryItem title={title} />);

    // Assert that the component renders with the correct title
    expect(getByText(title)).toBeVisible();
  });

  it("renders with the correct CSS class", async () => {
    const title = "Test Category";
    const { container } = render(<CategoryItem title={title} />);

    // Assert that the component renders with the correct CSS class
    const className = container.firstChild.className;
    expect(className).toContain("CategoryItem");
  });

  // You can add more tests based on your specific requirements
});
