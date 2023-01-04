import {Link} from 'react-router-dom'
import { useCart } from '../../contexts/cart/cartContext';
import './Header.scss'

function Header() {
	const { cart } = useCart();

	const cartSum = () => cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
	const cartQuantity = () => cart.reduce((acc, el) => acc + el.quantity, 0);

  return (
		<header className='header'>
			<Link to={"/"}><div className='header__logo'>
				<div className='header__logo-img'></div>
				<span>Online Store</span>
			</div>
			</Link>
			<div className='header__cart-total'>
				Cart total: € {cartSum()}
			</div>
			<div className='header__cart-img'>
				<Link to={"/cart"}>
				<div className='header__cart-number'>
					{cartQuantity()}
				</div>
				</Link>
			</div>
		</header>
  );
}

export default Header;
