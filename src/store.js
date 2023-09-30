import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";

const store = configureStore({ reducer: postsReducer });

export default store;