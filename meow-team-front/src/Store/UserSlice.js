import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    image: null,
    email: null,
    password: null,
    token: null,
};

const UserInfo = createSlice({
  name: 'UserInfo',
  initialState,
  reducers: {
    setInfo: (state, action) => {
        console.error(action.payload);
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.image = action.payload.image;
        state.token = action.payload.token;
    }
  }
});
export const { setInfo } = UserInfo.actions;
export default UserInfo.reducer;
