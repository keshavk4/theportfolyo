import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./controller";

export const store = configureStore({
    reducer: userReducer
});
