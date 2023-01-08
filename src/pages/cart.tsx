import './cart.scss';
import CartProducts from '../components/cart-products/cart-products';
import CartSummary from '../components/cart-summary/cart-summary';
import Modal from '../components/modal/modal';
import ModalForm from '../components/modal-form/modal-form';
import ModalRedirect from '../components/ModalRedirect/ModalRedirect';
import { useState } from 'react';
import { useCart } from '../contexts/cart/cartContext';

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
               {modal && (
                  <Modal modal={setModal} redirect={redirect}>
                     {redirect ? (
                        <ModalRedirect redirect={setRedirect} />
                     ) : (
                        <ModalForm redirect={setRedirect} />
                     )}
                  </Modal>
               )}
            </>
         ) : (
            <div className="empty-card">Cart is Empty</div>
         )}
      </main>
   );
}
