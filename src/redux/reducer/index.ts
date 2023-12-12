import { combineReducers } from "@reduxjs/toolkit";
import ingredienceReducer from "./ingredience";

export const rootReducer = combineReducers({
    ingredience: ingredienceReducer
})