import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCart } from '../../contexts/cart/cartContext';
import { cartQuantity, cartSum } from '../../helpers/cart';
import './Header.scss';

function Header() {
   const { cart } = useCart();

   return (
      <header className="header">
         <Link to={ROUTES.ROOT}>
            <div className="header__logo">
               <div className="header__logo-img"></div>
               <span>Online Store</span>
            </div>
         </Link>
         <div className="header__cart-total">
            Cart total: € {cartSum(cart, 0)}
         </div>
         <div className="header__cart-img">
            <Link to={ROUTES.CART}>
               <div className="header__cart-number">{cartQuantity(cart)}</div>
            </Link>
         </div>
      </header>
   );
}

export default Header;
