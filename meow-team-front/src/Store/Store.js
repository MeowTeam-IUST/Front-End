import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import UserReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    
  },
  middleware: [thunk]
});

export default store;
