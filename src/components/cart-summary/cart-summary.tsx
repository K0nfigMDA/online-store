import './cart-summary.scss'
import { useCart } from '../../contexts/cart/cartContext';

interface CartSummaryProps {
	modal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartSummary({modal}:CartSummaryProps) {
	const { cart } = useCart();

	const cartSum = () => cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
	const cartQuantity = () => cart.reduce((acc, el) => acc + el.quantity, 0);

	return (
		<div className='cart__summary'>
				<div className='summary__head'>Summary</div>
				<div className='summary__body'>
					<div className="summary__products-amount">Products: {cartQuantity()}</div>
					<div className="summary__total-priсe">Total: €{cartSum()}</div>
					<input className='summary__promo' type="search" />
					<button onClick={() => modal(true)} className='summary__btn'>Buy now</button>
				</div>
		</div>
  );
}

