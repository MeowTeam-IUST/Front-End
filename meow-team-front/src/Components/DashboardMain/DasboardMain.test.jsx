import { test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import StateSlice from "../../Slices/StateSlice";
import DashboardMain from "./DashboardMain";

const store = configureStore({
  reducer: {
    State: StateSlice,
  },
  preloadedState: {
    State: {
      dashboardSidebar: false,
    },
  },
});


test("renders DashboardMain component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <DashboardMain setChoosenItem={() => {}} />
    </Provider>
  );
  expect(getByText("بازگشت")).toBeTruthy();
});

test("calls setChoosenItem on back click", async () => {
  let choosenItemIndex;
  const setChoosenItem = (index) => {
    choosenItemIndex = index;
  };
  const { getByText } = render(
    <Provider store={store}>
      <DashboardMain setChoosenItem={setChoosenItem} />
    </Provider>
  );
  const backButton = getByText("بازگشت");
  fireEvent.click(backButton);
  expect(choosenItemIndex).toBe(-1);
});
