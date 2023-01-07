import CartProducts from '../components/CartProducts/CartProducts';
import CartSummary from '../components/CartSummary/CartSummary';
import './cart.scss';
import { useCart } from '../contexts/cart/cartContext';

export default function CartPage() {
   const { cart } = useCart();

   return (
      <div className="cart__container">
         {cart.length ? (
            <>
               <CartProducts /> 
							 <CartSummary />
            </>
         ) : (
            <div className="empty-card">Cart is Empty</div>
         )}
      </div>
   );
}
