import { IProduct } from "../../interfaces/products";
import './product.scss';

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  return (
    <div className="product-item">
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
          <button className="button">DROP FROM CART</button>
          <button className="button">DETAILS</button>
        </div>
      </div>
    </div>
  );
}