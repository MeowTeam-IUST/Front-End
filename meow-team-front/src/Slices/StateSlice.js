import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardSidebar : true,
  dashboardMain : true,
  editPopUp: false,
};

const StateSlice = createSlice({
  name: "State",
  initialState,
  reducers: {
    SetDashboard: (state, action) => {
      state.dashboardSidebar = action.payload.sidebar;
      state.dashboardMain = action.payload.main;
      
    },
    setEditPopUp: (state, action) => {
      state.editPopUp = action.payload.editPopUp,
      console.log(action.payload.editPopUp)
      
    },
  },
});

export const { SetDashboard, setEditPopUp } = StateSlice.actions;

export default StateSlice.reducer;