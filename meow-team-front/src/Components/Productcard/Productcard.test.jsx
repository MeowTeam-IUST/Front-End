// import { render, screen } from "@testing-library/react";
// import { describe, expect, test } from "vitest";
// import { Productcard } from "./Productcard";

// // describe("Productcard component", () => {
// //   test("should render the product name, price, and a buy button", () => {
// //     const product = {
// //       name: "Product Name",
// //       price: 100,
// //     };

// //     render(<Productcard {...product} />);

// //     expect(screen.getByText(product.name)).toBeInTheDocument();
// //     expect(screen.getByText(product.price)).toBeInTheDocument();
// //     expect(screen.getByText("خرید")).toBeInTheDocument();
// //   });
// // });
// describe("Productcard", () => {
//   test("renders Productcard component with correct name and price", () => {
//     const testName = "Test Product";
//     const testPrice = "$19.99";

//     render(<Productcard name={testName} price={testPrice} />);

//     // Assert that the component renders with the correct name and price
//     const nameElement = screen.getByText(testName);
//     const priceElement = screen.getByText(testPrice);

//     expect(nameElement).toBeInTheDocument();
//     expect(priceElement).toBeInTheDocument();
//   });
// });
