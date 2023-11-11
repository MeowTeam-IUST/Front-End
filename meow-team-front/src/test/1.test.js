import { render, screen } from "@testing-library/react";
import App from "../App"

it("Should have hi" , () => {
    render (<App/>);
    const messege = screen.queryByText (/hi/i);
    expect(messege).toBeDefined();
})