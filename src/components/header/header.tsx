import { useState } from 'react';
import {Link} from 'react-router-dom'
import './header.scss'

function Header() {
const [productCount, setProductCount] =	useState(0)
const [moneyAmount, setMoneyAmount] =	useState(0)


  return (
		<header className='header'>
			<Link to={"/"}><div className='header__logo'>
				<div className='header__logo-img'></div>
				<span>Online Store</span>
			</div>
			</Link>
			<div className='header__cart-total'>
				Cart total: € {moneyAmount}
			</div>
			<div className='header__cart-img'>
				<Link to={"/cart"}>
				<div className='header__cart-number'>
					{productCount}
				</div>
				</Link>
			</div>
		</header>
  );
}

export default Header;
