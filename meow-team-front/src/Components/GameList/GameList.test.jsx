import React from "react";
import { render, screen } from "@testing-library/react";
import GameList from "./GameList";

describe("GameList", () => {
  const mockProducts = [
    { name: "Game 0", image: "game1.jpg" },
    { name: "Game 2", image: "game2.jpg" },
    { name: "Game 3", image: "game3.jpg" },
  ];

   it("renders the list of games with empty cart", () => {
     render(<GameList Products={mockProducts} />);

    //  const gameItems = screen.getAllByTestId("game-item");
    //  expect(gameItems).toHaveLength(mockProducts.length);

    //  const cartElements = screen.queryAllByTestId(/cart-/);
    //  expect(cartElements).toHaveLength(0);

     mockProducts.forEach((item) => {
       const nameElement = screen.getByText(item.name);
       expect(nameElement).toBeInTheDocument();

    //    const imageElement = screen.getByText(item.image);
    //    expect(imageElement).toBeInTheDocument();
    //    expect(imageElement).toHaveAttribute("src", item.image);
     });
   });

  // Add more test cases as needed
});
