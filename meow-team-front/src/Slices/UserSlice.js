import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  set : 0,
  firstName : null,
  lastName : null,
  email : null,
  image : null,
  birthDate : null,
  Token : null
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.set = 1;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.birthDate = action.payload.birthDate;
      state.image = action.payload.Image;
      state.Token = action.payload.Token;
    },
    DeleteUser: (state, action) => {
      state.set = 0;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.birthDate = null;
      state.image = null;
      state.Token = null;
    },
  },
});

export const { SetUser, DeleteUser } = UserSlice.actions;

export default UserSlice.reducer;