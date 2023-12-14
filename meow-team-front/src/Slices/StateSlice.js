import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardSidebar : true,
  dashboardMain : true
};

const StateSlice = createSlice({
  name: "State",
  initialState,
  reducers: {
    SetDashboard: (state, action) => {
      state.dashboardSidebar = action.payload.sidebar;
      state.dashboardMain = action.payload.main;
      
    },
  },
});

export const { SetDashboard } = StateSlice.actions;

export default StateSlice.reducer;