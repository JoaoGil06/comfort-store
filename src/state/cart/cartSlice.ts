import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AddItemReducerPayloadType, CartState, EditItemReducerPayloadType, RemoveItemReducerPayloadType } from './types/CartState.type';

const defaultState: CartState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
	const cartString = localStorage.getItem('cart');
	return cartString ? JSON.parse(cartString) : defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage,
	reducers: {
		addItem: (state, action: AddItemReducerPayloadType): void => {
			const { product } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === product.cartID);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;

			cartSlice.caseReducers.calculateTotals(state);

			toast.success('Item added to cart');
		},
		clearCart: (): CartState => {
			localStorage.setItem('cart', JSON.stringify(defaultState));
			return defaultState;
		},
		removeItem: (state, action: RemoveItemReducerPayloadType): void => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);

			if (product) {
				state.cartItems = state.cartItems.filter((cartItem) => cartItem.cartID !== cartID);
				state.numItemsInCart -= product.amount;
				state.cartTotal -= product.price * product.amount;

				cartSlice.caseReducers.calculateTotals(state);

				toast.error('Item removed from cart');
			}
		},
		editItem: (state, action: EditItemReducerPayloadType): void => {
			const { cartID, amount } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === cartID);
			if (item) {
				state.numItemsInCart += amount - item.amount;
				state.cartTotal += item.price * (amount - item.amount);
				item.amount = amount;
				cartSlice.caseReducers.calculateTotals(state);
				toast.success('Cart updated');
			}
		},
		calculateTotals: (state) => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, editItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
