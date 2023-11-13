// import { expect , render } from "vitest";
// import App from "./App";

// describe("App", () => {
//   it('should render a div with the text "hi"', () => {
//     const wrapper = render(App);
//     const div = wrapper.find("div");
//     expect(div.text()).toBe("hi");
//   });
// });

import { App } from "./App"
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <App title="Testing">
        <h4>Content</h4>
      </App>
    );
  });

  test("should show title all the time", () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });
});