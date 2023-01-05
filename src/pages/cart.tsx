import CartProducts from '../components/cart-products/cart-products';
import CartSummary from '../components/cart-summary/cart-summary';
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
