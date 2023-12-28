import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cart/cartSlice';
import userReducer from './state/user/userSlice';

export const store = configureStore({
	reducer: {
		cartState: cartReducer,
		userState: userReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
