import './cart-products.scss';
import CartProductsItem from '../cart-products-item/cart-products-item';
import { useCart } from '../../contexts/cart/cartContext';
import { FormEvent, useEffect, useState } from 'react';

export default function CartProducts() {
   const { cart } = useCart();
	 const [itemsAmount, setItemsAmount] = useState(3)
	 const [pageNum, setPageNum] = useState(1)
	 
	 

	 function changeItemsAmount(e: FormEvent) {
		const target = e.target as HTMLInputElement
			setItemsAmount(Number(target.value))
	}

	useEffect(() => {
		const pages = Math.ceil(cart.length / itemsAmount) 
		if(pageNum > pages) {
			setPageNum((prev) => prev - 1)
		}
	}, [cart])

   return (
      <div className="cart__products">
         <div className="products__head _head">
            <div className="head__title">Products in Cart</div>
            <div className="head__controls">
               <div className="head__items _items">
                  <div className="items__text">Items:</div>
                  <input onInput={changeItemsAmount} className="Items__amount" type="number" value={itemsAmount ? itemsAmount : ''}/>
               </div>
               <div className="head__controls-panel _controls-panel">
                  <div className="controls-panel__text">Page: </div>
                  <button onClick={() => setPageNum(pageNum === 1 ? pageNum : pageNum - 1 )} className="controls-panel__less-btn">{'<'}</button>
                  <div className="controls-panel__amount">{pageNum}</div>
                  <button onClick={() => setPageNum((prev) => prev === Math.ceil(cart.length/itemsAmount) ? pageNum : pageNum + 1 )} className="controls-panel__more-btn">{'>'}</button>
               </div>
            </div>
         </div>
         <div className="products__body">
					{cart.filter((el, ind) => ind >= ((pageNum - 1) * itemsAmount) && ind < pageNum * itemsAmount).map((el) => <CartProductsItem product={el} key = {el.id} num = {cart.findIndex((item) => item === el) + 1} />)}
				 </div>
      </div>
   );
}



