import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import LittleCart from "./LittleCart";

describe("LittleCart", () => {
  it("renders the name and description", () => {
    render(
      <Router>
        <LittleCart
          id="1"
          name="Test Name"
          image="test.jpg"
          showPopup={false}
          description="Test Description"
        />
      </Router>
    );

    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

});
