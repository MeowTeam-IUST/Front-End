// GameList.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameList from "./GameList";

describe("GameList component", () => {
  it("renders GameList component with no products", () => {
    const { getByText } = render(<GameList Products={[]} id="someId" />);
    const noProductsText = getByText("محصولی برای مشاهده نیست");
    expect(noProductsText).toBeInTheDocument();
  });

//   it("renders GameList component with products", () => {
//     const products = [
//       {
//         id: 1,
//         title: "Product 1",
//         imageURL: "image1.jpg",
//         description: "Description 1",
//       },
//       {
//         id: 2,
//         title: "Product 2",
//         imageURL: "image2.jpg",
//         description: "Description 2",
//       },
//     ];

//     const { getByText, getAllByTestId } = render(
//       <GameList Products={products} id="someId" />
//     );

//     const productElements = getAllByTestId("game-list-item");
//     expect(productElements).toHaveLength(products.length);

//     products.forEach((product, index) => {
//       const productElement = productElements[index];
//       expect(productElement).toHaveTextContent(product.title);
//       // You can add more assertions based on your component's structure
//     });
//   });
});
