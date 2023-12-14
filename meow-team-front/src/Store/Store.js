import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice.js";
import CartSlice from "../Slices/CartSlice.js";
import StateSlice
 from "../Slices/StateSlice.js";
// Load state from localStorage if available
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    User: UserSlice,
    Cart: CartSlice,
    State : StateSlice
    
  },
  preloadedState: persistedState, // Set the preloadedState with the persistedState
});

// Save state to localStorage whenever it changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;