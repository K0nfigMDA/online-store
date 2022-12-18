import React from 'react';
import './header.scss'

function CreateHeader() {
  return (
		<header className='header'>
			<div className='header__logo'>
				<div className='header__logo-img'></div>
				<span>Online Store</span>
			</div>
			<div className='header__cart-total'>
				Cart total
			</div>
			<div className='header__cart-img'>
				<div className='header__cart-number'>
					0
				</div>
			</div>
		</header>
  );
}

export default CreateHeader;
