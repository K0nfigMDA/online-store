import './cart-products.scss';
import CartProductsItem from '../cart-products-item/cart-products-item';
import { useCart } from '../../contexts/cart/cartContext';

export default function CartProducts() {
   const { cart } = useCart();
   return (
      <div className="cart__products">
         <div className="products__head _head">
            <div className="head__title">Products in Cart</div>
            <div className="head__controls">
               <div className="head__items _items">
                  <div className="items__text">Items:</div>
                  <input className="Items__amount" type="text" />
               </div>
               <div className="head__controls-panel _controls-panel">
                  <div className="controls-panel__text">Page:</div>
                  <button className="controls-panel__less-btn">{'<'}</button>
                  <div className="controls-panel__amount">0</div>
                  <button className="controls-panel__more-btn">{'>'}</button>
               </div>
            </div>
         </div>
         <div className="products__body">
					{cart.map(el => <CartProductsItem product={el} key = {el.id}/>)}
				 </div>
      </div>
   );
}



