import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
