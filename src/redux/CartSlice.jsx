import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items: { id, name, image, cost, price, description, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const targetIdentifier = product.name || product.id;
      const existingItem = state.items.find(
        (item) => item.name === targetIdentifier || (item.id && item.id === targetIdentifier)
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const targetIdentifier =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.name || action.payload.id
          : action.payload;

      state.items = state.items.filter(
        (item) => item.name !== targetIdentifier && item.id !== targetIdentifier
      );
    },
    updateQuantity: (state, action) => {
      const { name, id, quantity } = action.payload;
      const targetIdentifier = name || id;
      const itemToUpdate = state.items.find(
        (item) => item.name === targetIdentifier || (item.id && item.id === targetIdentifier)
      );

      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.name !== targetIdentifier && item.id !== targetIdentifier
          );
        }
      }
    },
    increaseQuantity: (state, action) => {
      const targetIdentifier =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.name || action.payload.id
          : action.payload;

      const item = state.items.find(
        (i) => i.name === targetIdentifier || (i.id && i.id === targetIdentifier)
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const targetIdentifier =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.name || action.payload.id
          : action.payload;

      const item = state.items.find(
        (i) => i.name === targetIdentifier || (i.id && i.id === targetIdentifier)
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => i.name !== targetIdentifier && i.id !== targetIdentifier
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

const cartReducer = CartSlice.reducer;
export default cartReducer;
