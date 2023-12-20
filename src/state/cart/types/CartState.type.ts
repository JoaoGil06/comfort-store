export interface CartItemState {
	cartID: string;
	productID: number;
	image: string;
	title: string;
	price: number;
	company: string;
	productColor: string;
	amount: number;
}

export interface CartState {
	cartItems: CartItemState[];
	numItemsInCart: number;
	cartTotal: number;
	shipping: number;
	tax: number;
	orderTotal: number;
}

export interface AddItemReducerPayloadType {
	type: string;
	payload: {
		product: CartItemState;
	};
}

export interface RemoveItemReducerPayloadType {
	type: string;
	payload: {
		cartID: string;
	};
}

export interface EditItemReducerPayloadType {
	type: string;
	payload: {
		cartID: string;
		amount: number;
	};
}
