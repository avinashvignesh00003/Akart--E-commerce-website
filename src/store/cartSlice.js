import { createSlice } from "@reduxjs/toolkit";



let dataweb = JSON.parse(localStorage.getItem("cart")) ;





const cartSlice = createSlice({
  name: "cart",
  initialState: dataweb,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      let itemId = action.payload;
      // {1,2,4,5,3}=> 2!==2
      let newProducts = state.filter(
        (cartProduct) => cartProduct.id !== itemId
      );
      localStorage.setItem("cart", JSON.stringify([...newProducts]));

      return newProducts;
    },
  },
});
export default cartSlice.reducer
export let {addItem,removeItem}=cartSlice.actions