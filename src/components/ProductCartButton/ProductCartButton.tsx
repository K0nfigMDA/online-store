import { useCart } from "../../contexts/cart/cartContext";
import { IProduct } from "../../interfaces/products";

interface IProductCartButtonProps {
  product: IProduct;
  bigMode: boolean;
}

export default function ProductCartButton({product, bigMode}: IProductCartButtonProps ) {
  const { cart, addToCart, removeFromCart } = useCart();
  const addText = bigMode ? 'ADD TO CART' : 'ADD';
  const dropText = bigMode ? 'DROP FROM CART' : 'DROP';
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
        {inCart ? dropText : addText}
    </button>
  );
}