import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { IProduct } from "../../interfaces/products";
import ProductCartButton from "../ProductCartButton/ProductCartButton";
import './Product.scss';

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
          <ProductCartButton product={product}/>
          <Link to={`${ROUTES.PRODUCT_DETAILS}/${product.id}`}>
            <button className="button">DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}