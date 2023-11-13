import { render } from "@testing-library/react";
import CategoryHeader from "./CategoryHeader";

describe("CategoryHeader", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <CategoryHeader icon="test-icon.png" title="Test Title" />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the correct icon", () => {
    const { getByAltText } = render(
      <CategoryHeader icon="test-icon.png" title="Test Title" />
    );
    expect(getByAltText("")).toHaveAttribute("src", "test-icon.png");
  });
});
