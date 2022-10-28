import { createSlice } from "@reduxjs/toolkit";

interface PostStats {
  cartItems: [] | string;
  cartTotalQuality: number;
  cartTotalAmount: number;
}

const storage: any = localStorage.getItem("cartItems");
const initialState: PostStats = {
  cartItems: storage ? JSON.parse(storage) : [],
  cartTotalQuality: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state:any, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
