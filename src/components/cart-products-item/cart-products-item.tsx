import './cart-products-item.scss';
import { useCart } from '../../contexts/cart/cartContext';
import { IProductCart } from '../../interfaces/products';
import { useState } from 'react';

 
interface CartProductsItemProps {
   product: IProductCart;
	 num: number;
}



export default function CartProductsItem({product, num}: CartProductsItemProps) {
   const { removeFromCart, addToCart, removeItemFromCart } = useCart();
	 const [price, setPrice] = useState(product.price)
	 
	 

	 
	 function addItem() {
		if(product.quantity < product.stock) {
			setPrice(price + product.price)
			addToCart(product)
		}
	 }

	 function removeItem() {
		if(product.quantity > 1) {
			setPrice(price - product.price)
			removeItemFromCart(product)
		}
		else(removeFromCart(product))
	 }

   return (
      <div className="products__item">
         <div className="item__num">{num}</div>
				 <img src={product.thumbnail} alt="product" className="item__image"/>
         <div className="item__content _content">
            <div className="content__title">{product.title}</div>
            <div className="content__info">{product.description}</div>
            <div className="content__rating-discount">
               <div className="content__rating">{product.rating}</div>
               <div className="content__discount">{product.discountPercentage}</div>
            </div>
         </div>
         <div className="item__controls-panel _controls">
            <div className="controls__stock-amount">Stock:{product.stock}</div>
            <div className="controls__cart-amount">
               <button className="controls__plus-btn" onClick={() => addItem()}>+</button>
               <div className="controls__amount-num">{product.quantity}</div>
               <button className="controls__minus-btn" onClick={() => removeItem()}>-</button>
            </div>
            <div className="controls__price">€{price}</div>
         </div>
      </div>
   );
}

// Спросить про функции из Хедера( добавление добавление товара работает, ремув не работает )
// как писать цикл в дивах?