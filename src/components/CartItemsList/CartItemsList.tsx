import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItem } from '..';

const CartItemsList = () => {
	const cartItems = useSelector((state: RootState) => state.cartState.cartItems);

	return (
		<div>
			{cartItems.map((item) => {
				return <CartItem key={item.cartID} cartItem={item} />;
			})}
		</div>
	);
};
export default CartItemsList;
