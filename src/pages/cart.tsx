import CartProducts from '../components/cart-products/cart-products'
import CartSummary from  '../components/cart-summary/cart-summary'
import './cart.scss'
import { useCart } from '../contexts/cart/cartContext';




export default function CartPage() {
	const { cart } = useCart();
	console.log(cart)

	return (
		<div className='cart__container'>
			<CartProducts/>
			<CartSummary/>
		</div>
  );
}



