import { configureStore } from "@reduxjs/toolkit";
import cartsliderReducer from "./cartSlice";

const store = configureStore({
    reducer:{
cart:cartsliderReducer
    }
});
export default store;


