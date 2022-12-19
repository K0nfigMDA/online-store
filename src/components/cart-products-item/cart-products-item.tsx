import './cart-products-item.scss'



export default function CartProductsItem() {
	return (
		<div className='products__item'>
			<div className="item__num">number</div>
			<div className="item__image">image</div>
			<div className="item__content _content">
				<div className="content__title">title</div>
				<div className="content__info">info</div>
				<div className="content__rating-discount">
					<div className="content__rating">rating</div>
					<div className="content__discount">discount</div>
				</div>
			</div>
			<div className="item__controls-panel _controls">
				<div className="controls__stock-amount">Stock</div>
				<div className="controls__cart-amount">
					<button className='controls__plus-btn'>+</button>
					<div className="controls__amount-num">0</div>
					<button className='controls__minus-btn'>-</button>
				</div>
				<div className="controls__price">€</div>
			</div>
		</div>
  );
}


