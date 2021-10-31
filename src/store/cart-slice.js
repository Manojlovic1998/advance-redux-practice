import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            // Get dispatched item
            const newItem = action.payload;
            // Check if it exists in previous state
            const existingItem = state.items.find(item => item.id === newItem.id);

            // If it does not exist add it as a new item
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            } else {
                // If it exists just increment quantity and increase the total price
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;