import CartProducts from '../components/cart-products/cart-products'
import CartSummary from  '../components/cart-summary/cart-summary'
import './cart.scss'
import { useCart } from '../contexts/cart/cartContext';
import Modal from '../components/modal/modal';
import ModalForm from '../components/modal-form/modal-form';
import ModalRedirect from '../components/ModalRedirect/ModalRedirect';
import { useState } from 'react';




export function CartPage() {
	const [modal, setModal] = useState(false)
	const [redirect, setRedirect] = useState(false)
	const { cart } = useCart();
	console.log(cart)

	return (
		<div className='cart__container'>
			<CartProducts/>
			<CartSummary modal = {setModal}/>
			{modal && <Modal modal = {setModal} redirect = {redirect}>
			{redirect ? <ModalRedirect redirect = {setRedirect}/> : <ModalForm redirect = {setRedirect}/>}
			</Modal>}
			
			
		</div>
  );
}



