import { test } from "vitest";
import {
  SetDashboard,
  setEditPopUp,
  default as reducer,
} from "./StateSlice";

test("SetDashboard action", () => {
  const state = {
    dashboardSidebar: false,
    dashboardMain: false,
    editPopUp: false,
  };

  const action = SetDashboard({ sidebar: true, main: true });
  const newState = reducer(state, action);

  expect(newState.dashboardSidebar).toBe(true);
  expect(newState.dashboardMain).toBe(true);
});

test("setEditPopUp action", () => {
  const state = {
    dashboardSidebar: true,
    dashboardMain: true,
    editPopUp: false,
  };

  const action = setEditPopUp({ editPopUp: true });
  const newState = reducer(state, action);

  expect(newState.editPopUp).toBe(true);
});
