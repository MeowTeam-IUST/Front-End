import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Name : null,
  Phone : null,
  Image : null,
  Token : null,

};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.Name = action.payload.Name;
      state.Phone = action.payload.Phone;
      state.Image = action.payload.Image;
      state.Token = action.payload.Token;
    },
    DeleteUser: (state, action) => {
      state.Name = null;
      state.Phone = null;
      state.Image = null;
      state.Token = null;
    },
  },
});

export const { SetUser, DeleteUser } = UserSlice.actions;

export default UserSlice.reducer;