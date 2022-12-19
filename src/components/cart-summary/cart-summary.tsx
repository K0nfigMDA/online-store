import './cart-summary.scss'


export default function CartSummary() {
	return (
		<div className='cart__summary'>
				<div className='summary__head'>Summary</div>
				<div className='summary__body'>
					<div className="summary__products-amount">10</div>
					<div className="summary__total-priсe">Total:</div>
					<input className='summary__promo' type="search" />
					<button className='summary__btn'>Buy now</button>
				</div>
		</div>
  );
}

