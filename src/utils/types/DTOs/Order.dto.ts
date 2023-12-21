import { CartItemState } from "../../../state/cart/types/CartState.type";

export type OrderDto = {
	id: number;
	attributes: {
        name: string;
        address: string;
        numItemsInCart: number;
        orderTotal: string;
        cartItems: CartItemState[]
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
	};
};
