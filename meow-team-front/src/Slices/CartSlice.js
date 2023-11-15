import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    State : 1 ,
    Items : [] ,
    cost : 0 ,
    discount : 0 ,
    total : 0 ,
    describtion : "" 

};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    ChangeState: (state, action) => {
      state.State = action.payload;
    },
    AddItem: (state, action) => {
      state.Items.push(action.payload);
    },
    DeleteItem: (state, action) => {
      state.Items = state.Items.filter((item) => item.id !== action.payload);
    },
    SetCost: (state, action) => {
      state.cost = action.payload;
    },
    SetDiscount: (state, action) => {
      state.discount = action.payload;
    },
    SetTotal: (state, action) => {
      state.total = action.payload;
    },
    SetDescribtion: (state, action) => {
      state.describtion = action.payload;
    },
    DeletCart: (state, action) => {
      state.State = 1 ;
      state.Items = [] ;
      state.cost = 0 ;
      state.discount = 0 ;
      state.total = 0 ;
      state.describtion = "" ;
    }

  },
});

export const {  ChangeState, AddItem , DeleteItem , SetCost , SetDiscount , SetTotal , SetDescribtion , DeletCart } = CartSlice.actions;

export default CartSlice.reducer;