import { createSlice } from '@reduxjs/toolkit';


const cartItems = JSON.parse(localStorage.getItem('cartItems'))??[];
const initialState = {
  items: cartItems,
  total: 0,
};

const calculateTotal = (items) => {
  console.log("TOTAL at slide",items)
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      item.quantity = item.quantity || 1; // Ensure default quantity
    console.log("state.items")
    console.log(state.items)
      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      state.total = calculateTotal(state.items);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      state.total = calculateTotal(state.items);
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = calculateTotal(state.items);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
