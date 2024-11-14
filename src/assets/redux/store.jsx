import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Initial';

const store = configureStore({
reducer: {
    cart: cartReducer,
},
});

export default store;
