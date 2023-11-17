// BigSlider.test.js
import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import BigSlider from "./BigSlider";

const mockComponents = [
  { name: "Game 1" },
  { name: "Game 2" },
  { name: "Game 3" },
];

describe("BigSlider Component", () => {
  it("renders the BigSlider component with the first slide initially", async () => {
    const { getByText } = render(<BigSlider components={mockComponents} />);

    // Assert that the component initially shows the first slide
    expect(getByText("Game 1")).toBeVisible();
  });

//   it('changes to the next slide when the "Next" button is clicked', async () => {
//     const { getByText } = render(<BigSlider components={mockComponents} />);

//     // Click the "Next" button
//     fireEvent.click(getByText((content, node) => node.textContent === "›"));

//     // Assert that the component now shows the second slide
//     expect(getByText("Game 2")).toBeVisible();
//   });

//   it('changes to the previous slide when the "Previous" button is clicked', async () => {
//     const { getByText } = render(<BigSlider components={mockComponents} />);

//     // Click the "Next" button to move to the second slide
//     fireEvent.click(getByText((content, node) => node.textContent === "›"));

//     // Click the "Previous" button
//     fireEvent.click(getByText((content, node) => node.textContent === "‹"));

//     // Assert that the component now shows the first slide again
//     expect(getByText("Game 1")).toBeVisible();
//   });

  // You can add more tests based on your specific requirements
});
