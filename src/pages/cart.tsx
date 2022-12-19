import CartProducts from '../components/cart-products/cart-products'
import CartSummary from  '../components/cart-summary/cart-summary'
import './cart.scss'


export default function CartPage() {
	return (
		<div className='cart__container'>
			<CartProducts/>
			<CartSummary/>
		</div>
  );
}



