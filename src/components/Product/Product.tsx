import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useSearchParams } from "react-router-dom";
import { VIEW_OPTIONS, VIEW_PARAM } from "../../constants/view";
import { useCart } from "../../contexts/cart/cartContext";
import { IProduct } from "../../interfaces/products";
import ProductCartButton from "../ProductCartButton/ProductCartButton";
import './Product.scss';

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  const { cart } = useCart();
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

  return (
    <div className={`product-item ${inCartClass} ${viewClass}`}>
      <div className="item-wrapper" style={{background: `url(${product.thumbnail}) 0% 0% / cover`}}>
        <div className="item-text">
          <div className="item-title">{ product.title }</div>
            {viewMode && <div className="item-info">
              <ul className="item-info-list">
                <li><span>Category: </span>{product.category}</li>
                <li><span>Brand: </span>{product.brand}</li>
                <li><span>Price: </span>€{product.price}</li>
                <li><span>Discount: </span>{product.discountPercentage}%</li>
                <li><span>Rating: </span>{product.rating}</li>
                <li><span>Stock: </span>{product.stock}</li>
              </ul>
            </div>
            }
        </div>
        <div className="item-buttons">
          <ProductCartButton product={product} bigMode={viewMode}/>
          <Link to={`${ROUTES.PRODUCT_DETAILS}/${product.id}`}>
            <button className="button">DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
