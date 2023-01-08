import './cart.scss';
import Modal from '../components/modal/modal';
import ModalForm from '../components/modal-form/modal-form';
import ModalRedirect from '../components/ModalRedirect/ModalRedirect';
import { useState } from 'react';
import { useCart } from '../contexts/cart/cartContext';
import CartProducts from '../components/CartProducts/CartProducts';
import CartSummary from '../components/CartSummary/CartSummary';

export default function CartPage() {
   const { cart } = useCart();
   const [modal, setModal] = useState(false);
   const [redirect, setRedirect] = useState(false);

   return (
      <main className="cart__container">
         {cart.length ? (
            <>
               <CartProducts />
               <CartSummary modal={setModal} />
            </>
         ) : (
            <div className="empty-card">Cart is Empty</div>
         )}
         {modal && (
            <Modal modal={setModal} redirect={redirect}>
               {redirect ? (
                  <ModalRedirect redirect={setRedirect} />
               ) : (
                  <ModalForm redirect={setRedirect} />
               )}
            </Modal>
         )}
      </main>
   );
}
