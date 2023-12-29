import { test } from "vitest";
import {
  ChangeState,
  AddItem,
  DeleteItem,
  SetCost,
  SetDiscount,
  SetTotal,
  SetDescribtion,
  DeletCart,
  default as reducer,
} from "./CartSlice";

test("ChangeState action", () => {
  const state = {
    State: 1,
    Items: [],
    cost: 0,
    discount: 0,
    total: 0,
    describtion: "",
  };

  const action = ChangeState(2);
  const newState = reducer(state, action);

  expect(newState.State).toBe(2);
});

test("AddItem action", () => {
  const state = {
    State: 1,
    Items: [],
    cost: 0,
    discount: 0,
    total: 0,
    describtion: "",
  };

  const item = { id: 1, name: "item1" };
  const action = AddItem(item);
  const newState = reducer(state, action);

  expect(newState.Items).toContainEqual(item);
});

test("Calculate total cost", () => {
  const state = {
    State: 1,
    Items: [
      { id: 1, name: "item1", cost: 10 },
      { id: 2, name: "item2", cost: 20 },
    ],
    cost: 0,
    discount: 0,
    total: 0,
    describtion: "",
  };

  const totalCost = state.Items.reduce((total, item) => total + item.cost, 0);
  let newState = reducer(state, SetCost(totalCost));

  expect(newState.cost).toBe(totalCost);

  const discount = 5;
  newState = reducer(newState, SetDiscount(discount));

  expect(newState.discount).toBe(discount);

  const total = totalCost - discount;
  newState = reducer(newState, SetTotal(total));

  expect(newState.total).toBe(total);
});

test("Add and Delete Item", () => {
  const state = {
    State: 1,
    Items: [],
    cost: 0,
    discount: 0,
    total: 0,
    describtion: "",
  };

  const item = { id: 1, name: "item1" };
  let newState = reducer(state, AddItem(item));

  expect(newState.Items).toContainEqual(item);

  newState = reducer(newState, DeleteItem(item.id));

  expect(newState.Items).not.toContainEqual(item);
});

// Add more tests for DeleteItem, SetCost, SetDiscount, SetTotal, SetDescribtion, DeletCart actions
