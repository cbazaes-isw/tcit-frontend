import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";

const store = configureStore(postReducer);

export default store;