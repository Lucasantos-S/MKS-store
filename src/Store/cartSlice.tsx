import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../components/car/styleProduto";

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
    addToCart(state: any, action) {
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
    removeFromCart(state: any, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem: any) => cartItem.id !== action.payload
      );
      const localStorageItem = JSON.parse(storage);
      const remove = localStorageItem.filter(
        (item:any) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(remove));

      state.cartItems = nextCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
