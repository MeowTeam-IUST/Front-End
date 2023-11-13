import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../Slices/UserSlice.js";
import { test } from "vitest";
import { Header } from "./Header";
describe("PopularGame", () => {

test("renders Header component without crashing", () => {
  const store = configureStore({
    reducer: {
      User: userReducer,
    },
  });

  const { getByAltText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const logo = getByAltText("logo");
  fireEvent.click(logo);

  expect(store.getState().User).toEqual({
    Name: "MohammadAli",
    Number: "09123456789",
    Profile: "azhini",
    Token: "123456789",
  });
});

})
