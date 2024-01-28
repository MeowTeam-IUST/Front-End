import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { BASE_URL } from "../API/consts";
const initialState = {
  set : 0,
  firstName : null,
  lastName : null,
  email : null,
  image : null,
  birthDate : null,
  phoneNumber : null,
  Token : null,
  isAdmin : null
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      console.log(action.payload)
      state.set = 1;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.birthDate = action.payload.birthDate;
      state.image =  action.payload.Image;
      state.phoneNumber = action.payload.phoneNumber;
      state.Token = action.payload.Token;
      state.isAdmin = action.payload.isAdmin;
    },
    DeleteUser: (state, action) => {
      state.set = 0;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.birthDate = null;
      state.image = null;
      state.phoneNumber = null;
      state.Token = null;
      state.isAdmin = null;
    },
  },
});

export const { SetUser, DeleteUser } = UserSlice.actions;

export default UserSlice.reducer;