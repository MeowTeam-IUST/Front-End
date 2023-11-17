// Aboutgame.test.js
import { expect } from "vitest";
import { render } from "@testing-library/react";
import Aboutgame from "./Aboutgame";

describe("Aboutgame Component", () => {
  it("renders with the provided iconcap and cap", async () => {
    const iconcap = "Test Icon";
    const cap = "Test Caption";

    const { getByText } = render(<Aboutgame iconcap={iconcap} cap={cap} />);

    // Assert that the component renders with the correct iconcap and cap
    expect(getByText(iconcap)).toBeVisible();
    expect(getByText(cap)).toBeVisible();
  });

  it("renders with the correct CSS class for appinfo and appinfo1", async () => {
    const iconcap = "Test Icon";
    const cap = "Test Caption";

    const { container } = render(<Aboutgame iconcap={iconcap} cap={cap} />);

    // Assert that the component renders with the correct CSS class for appinfo and appinfo1
    const className = container.firstChild.className;
    expect(className).toContain("appinfo");
    expect(container.firstChild.firstChild.className).toContain("appinfo1");
  });

  // You can add more tests based on your specific requirements
});
