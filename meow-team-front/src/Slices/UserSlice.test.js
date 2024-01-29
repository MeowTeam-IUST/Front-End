import { test } from "vitest";
import {
  SetUser,
  DeleteUser,
  default as reducer,
} from "./UserSlice";

import { BASE_URL } from "../API/consts";

// test("SetUser action", () => {
//   const state = {
//     set: 0,
//     firstName: null,
//     lastName: null,
//     email: null,
//     image: null,
//     birthDate: null,
//     phoneNumber: null,
//     Token: null,
//     isAdmin: null,
//   };

//   const user = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     birthDate: "2000-01-01",
//     image: "path-to-image",
//     phoneNumber: "1234567890",
//     Token: "token",
//     isAdmin: false,
//   };

//   const action = SetUser(user);
//   const newState = reducer(state, action);

//   expect(newState.set).toBe(1);
//   expect(newState.firstName).toBe(user.firstName);
//   expect(newState.lastName).toBe(user.lastName);
//   expect(newState.email).toBe(user.email);
//   expect(newState.birthDate).toBe(user.birthDate);
//   expect(newState.image).toBe(BASE_URL + "/" + user.image);
//   expect(newState.phoneNumber).toBe(user.phoneNumber);
//   expect(newState.Token).toBe(user.Token);
//   expect(newState.isAdmin).toBe(user.isAdmin);
// });

test("DeleteUser action", () => {
  const state = {
    set: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    image: BASE_URL + "/path-to-image",
    birthDate: "2000-01-01",
    phoneNumber: "1234567890",
    Token: "token",
    isAdmin: false,
  };

  const action = DeleteUser();
  const newState = reducer(state, action);

  expect(newState.set).toBe(0);
  expect(newState.firstName).toBe(null);
  expect(newState.lastName).toBe(null);
  expect(newState.email).toBe(null);
  expect(newState.birthDate).toBe(null);
  expect(newState.image).toBe(null);
  expect(newState.phoneNumber).toBe(null);
  expect(newState.Token).toBe(null);
  expect(newState.isAdmin).toBe(null);
});
