import { useProducts } from "../../hooks/useProducts";
import Product from "../product/product";
import './productsContainer.scss';

export default function ProductsContainer() {
  const {products, error} = useProducts();
  return (
    <div className="products-container">
      { 
        error ? 
        error :
        products.map(product => <Product product={product} key={product.id}/>) 
      }
    </div>
  );
}