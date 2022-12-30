import { useSearchParams } from "react-router-dom";
import { VIEW_OPTIONS, VIEW_PARAM } from "../../constants/view";
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

  const param = searchParams.get(VIEW_PARAM);
  const viewMode = param 
    ? (param === VIEW_OPTIONS[1]
        ? false
        : true) 
    : true;
  const viewClass = viewMode ? 'big-item' : '';

  const addHandler = () => {
    addToCart(product);
  }

  const removeHandler = () => {
    removeFromCart(product);
  }

  return (
    <div className={`product-item ${inCartClass} ${viewClass}`}>
      <div className="item-wrapper" style={{background: `url(${product.thumbnail}) 0% 0% / cover`}}>
        <div className="item-text">
          <div className="item-title">{ product.title }</div>
            {viewMode && <div className="item-info">
              <ul className="item-info-list">
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>Price: €{product.price}</li>
                <li>Discount: {product.discountPercentage}%</li>
                <li>Rating: {product.rating}</li>
                <li>Stock: {product.stock}</li>
              </ul>
            </div>
            }
        </div>
        <div className="item-buttons">
          {inCart && <button className="button" onClick={removeHandler}>{viewMode ? 'DROP FROM CART' : 'DROP'}</button>}
          {!inCart && <button className="button" onClick={addHandler}>{viewMode ? 'ADD TO CART' : 'ADD'}</button>}
          <button className="button">DETAILS</button>
        </div>
      </div>
    </div>
  );
}