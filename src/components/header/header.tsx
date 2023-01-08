import {Link} from 'react-router-dom'
import { useCart } from '../../contexts/cart/cartContext';
import { cartQuantity, cartSum } from '../../helpers/cart';
import './header.scss'

function Header() {
	const { cart } = useCart();

	

  return (
		<header className='header'>
			<Link to={"/"}><div className='header__logo'>
				<div className='header__logo-img'></div>
				<span>Online Store</span>
			</div>
			</Link>
			<div className='header__cart-total'>
				Cart total: € {cartSum(cart, 0)}
			</div>
			<div className='header__cart-img'>
				<Link to={"/cart"}>
				<div className='header__cart-number'>
					{cartQuantity(cart)}
				</div>
				</Link>
			</div>
		</header>
  );
}

export default Header;
