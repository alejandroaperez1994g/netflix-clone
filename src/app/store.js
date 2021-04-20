import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
