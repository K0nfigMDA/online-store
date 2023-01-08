import './CartSummary.scss';
import { useCart } from '../../contexts/cart/cartContext';
import { cartQuantity, cartSum } from '../../helpers/cart';
import { IPromocode, promocodes } from '../../constants/promo';
import { FormEvent, useEffect, useState } from 'react';
import CartPromo from '../CartPromo/CartPromo';

interface CartSummaryProps {
	modal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartSummary({modal}:CartSummaryProps) {
   const { cart } = useCart();
	 const [promoTip, setPromoTip] = useState<IPromocode | null>(null)
	 const [applyPromo, setApplyPromo] = useState<IPromocode[]>([])
	 
	 const btnAdd = applyPromo.some((el) => el.key === promoTip?.key)
	

	 function showPromo(e: FormEvent) {
		const target = e.target as HTMLInputElement;
		const obj = promocodes.find(el => (el.key).toUpperCase() === target.value.toUpperCase())
		if(obj) {
			setPromoTip(obj)
		}
		else {
			setPromoTip(null)
		}	
	 }

	 function addPromo() {
		setApplyPromo((prev) => {
		const newArr = [...prev]
		newArr.push(promoTip as IPromocode)
		return newArr}
		)
	 }

	 function sumPromo() {
		return applyPromo.reduce((prev, current) => prev + current.discount, 0)
	 }


	 function setLocalStorage() {
		localStorage.setItem('cartpromo', JSON.stringify(applyPromo))
	}

	 function getLocalStorage() {
		if(localStorage.getItem('cart')) {
			setApplyPromo(JSON.parse(localStorage.getItem('cartpromo') as string))
		}
	}
	
	useEffect(() => {
		getLocalStorage()
	}, [])


	useEffect(() => {
		setLocalStorage()
	}, [applyPromo])

	
   return (
      <div className="cart__summary">
         <div className="summary__head">Summary</div>
         <div className="summary__body">
            <div className="summary__products-amount">
               Products: {cartQuantity(cart)}
            </div>
            <div className= {`summary__total-priсe ${applyPromo.length ? '_active': ''}`}>Total: €{cartSum(cart, 0)}</div>
						{!!applyPromo.length && <div className="summary__total-priсe">Total: €{cartSum(cart, sumPromo())}</div>}
						{!!applyPromo.length && <CartPromo promocodes = {applyPromo} setapplypromo ={setApplyPromo} />}
            <input onInput={(e) => {showPromo(e)}} className="summary__promo" type="search" placeholder='Enter promo code'/>
						{promoTip && <div className='summary__promo-tip'>{promoTip.title} - {promoTip.discount}%
						{!btnAdd && <button onClick={addPromo}>Add</button>}
						</div> }
						<div className='summary__tip'>Promo for test: 'RS', 'EPM', 'KOZ', 'DZEK'</div>
            <button onClick={() => modal(true)} className='summary__btn'>Buy now</button>
         </div>
      </div>
   );
}
