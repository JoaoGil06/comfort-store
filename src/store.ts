import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cart/cartSlice';

export const store = configureStore({
	reducer: {
		cartState: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
