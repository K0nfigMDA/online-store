import { useCart } from "../../contexts/cart/cartContext";
import { IProduct } from "../../interfaces/products";

interface IProductCartButtonProps {
  product: IProduct;
}

export default function ProductCartButton({product}: IProductCartButtonProps ) {
  const { cart, addToCart, removeFromCart } = useCart();

  const inCart = cart.find(el => el.id === product.id);

  const addHandler = () => {
    addToCart(product);
  }

  const removeHandler = () => {
    removeFromCart(product);
  }

  return (
    <button 
      className="button" 
      onClick={inCart ? removeHandler : addHandler}>
        {inCart ? 'DROP FROM CART' : 'ADD TO CART'}
    </button>
  );
}