import './CartProducts.scss';
import CartProductsItem from '../CartProductsItem/CartProductsItem';
import { useCart } from '../../contexts/cart/cartContext';
import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { itemsAmountParam, pageNumParam } from '../../constants/cart';

export default function CartProducts() {
   const { cart } = useCart();
   const [itemsAmount, setItemsAmount] = useState(3);
   const [pageNum, setPageNum] = useState(1);
   const [searchParams, setSearchParams] = useSearchParams();

   function changeItemsAmount(e: FormEvent) {
      const target = e.target as HTMLInputElement;
      setItemsAmount(Number(target.value));
      fillParams(itemsAmountParam, target.value);
   }

   function increasePageNum() {
      const newPageNum =
         pageNum === Math.ceil(cart.length / itemsAmount)
            ? pageNum
            : pageNum + 1;
      setPageNum(newPageNum);
      fillParams(pageNumParam, newPageNum.toString());
   }

   function decreasePageNum() {
      const newPageNum = pageNum === 1 ? pageNum : pageNum - 1;
      setPageNum(newPageNum);
      fillParams(pageNumParam, newPageNum.toString());
   }

   function fillParams(name: string, value: string) {
      setSearchParams((prev) => {
         if (Number(value)) {
            prev.set(name, value);
         } else {
            prev.delete(name);
         }
         return prev;
      });
   }

   useEffect(() => {
      const pages = Math.ceil(cart.length / itemsAmount);
      if (pageNum > pages) {
         setPageNum((prev) => prev - 1);
      }
			// eslint-disable-next-line
   }, [cart]);

   useEffect(() => {
      const pages = Math.ceil(cart.length / itemsAmount);
      if (pageNum > pages) {
         const newPageNum = pageNum - (pageNum - pages);
         setPageNum(newPageNum);
         fillParams(pageNumParam, newPageNum.toString());
      }
			// eslint-disable-next-line
   }, [itemsAmount]);

   useEffect(() => {
      if (Number(searchParams.get(itemsAmountParam))) {
         setItemsAmount(Number(searchParams.get(itemsAmountParam)));
      }
      if (Number(searchParams.get(pageNumParam))) {
         setPageNum(Number(searchParams.get(pageNumParam)));
      }
   }, [searchParams]);

   return (
      <div className="cart__products">
         <div className="products__head _head">
            <div className="head__title">Products in Cart</div>
            <div className="head__controls">
               <div className="head__items _items">
                  <div className="items__text">Items:</div>
                  <input
                     onInput={changeItemsAmount}
                     className="Items__amount"
                     type="number"
                     value={itemsAmount ? itemsAmount : ''}
                  />
               </div>
               <div className="head__controls-panel _controls-panel">
                  <div className="controls-panel__text">Page: </div>
                  <button
                     onClick={decreasePageNum}
                     className="controls-panel__less-btn"
                  >
                     {'<'}
                  </button>
                  <div className="controls-panel__amount">{pageNum}</div>
                  <button
                     onClick={increasePageNum}
                     className="controls-panel__more-btn"
                  >
                     {'>'}
                  </button>
               </div>
            </div>
         </div>
         <div className="products__body">
            {cart
               .filter(
                  (el, ind) =>
                     ind >= (pageNum - 1) * itemsAmount &&
                     ind < pageNum * itemsAmount
               )
               .map((el) => (
                  <CartProductsItem
                     product={el}
                     key={el.id}
                     num={cart.findIndex((item) => item === el) + 1}
                  />
               ))}
         </div>
      </div>
   );
}
