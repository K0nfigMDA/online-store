import Product from "../Product/Product";
import { useProducts } from "../../contexts/products/productsContext";
import './ProductsContainer.scss';


export default function ProductsContainer() {
  const { filteredProducts, error } = useProducts();

  return (
      <div className="products-container">
        { 
          error 
          ? error 
          : filteredProducts
            .map(product => <Product product={product} key={product.id}/>) 
        }
      </div>
  );
}