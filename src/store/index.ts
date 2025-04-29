// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // ✅ this is your actual reducer
// import 
export const store = configureStore({
  reducer: {
    user: userReducer, // ✅ correct usage
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
