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

const cartSlice:any = createSlice({
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
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(remove));
      state.cartItems = nextCartItems;
    },

    decreaseCart(state: any, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: any) => cartItem.id === action.payload
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem: any) => cartItem.id !== action.payload
        );
        state.cartItems = nextCartItems;
        const localStorageItem = JSON.parse(storage);
        const remove = localStorageItem.filter(
          (item: any) => item.id !== action.payload
        );
        localStorage.setItem("cartItems", JSON.stringify(remove));
      }
    },

    addToQuantity(state: any, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    totalValue(state:any) {
      let { total, quantity} = state.cartItems.reduce((acc:any, item:any) => {
        const {price, cartQuantity} = item
        const itemTotal = price * cartQuantity

        acc.total += itemTotal
        acc.quantity += cartQuantity
        return acc
      },
      {
        total:0,
        quantity:0
      }
      )

      state.cartTotalAmount = total
      state.cartTotalQuality = quantity
      
    },
  },
  
});


export const { addToCart, removeFromCart, decreaseCart, addToQuantity , totalValue} =
  cartSlice.actions;

export default cartSlice.reducer;
