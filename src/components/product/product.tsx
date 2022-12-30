import { useSearchParams } from "react-router-dom";
import { useCart } from "../../contexts/cart/cartContext";
import { IProduct } from "../../interfaces/products";
import './Product.scss';

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [searchParams] = useSearchParams();

  const inCart = cart.find(el => el.id === product.id);
  const inCartClass = inCart ? 'in-cart' : '';

  const addHandler = () => {
    addToCart(product);
  }

  const removeHandler = () => {
    removeFromCart(product);
  }

  return (
    <div className={`product-item ${inCartClass}`}>
      <div className="item-wrapper" style={{background: `url(${product.thumbnail}) 0% 0% / cover`}}>
        <div className="item-text">
          <div className="item-title">{ product.title }</div>
          <div className="item-info">
            <ul className="item-info-list">
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>Price: €{product.price}</li>
              <li>Discount: {product.discountPercentage}%</li>
              <li>Rating: {product.rating}</li>
              <li>Stock: {product.stock}</li>
            </ul>
          </div>
        </div>
        <div className="item-buttons">
          {inCart && <button className="button" onClick={removeHandler}>DROP FROM CART</button>}
          {!inCart && <button className="button" onClick={addHandler}>ADD TO CART</button>}
          <button className="button">DETAILS</button>
        </div>
      </div>
    </div>
  );
}