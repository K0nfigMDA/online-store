import Product from "../Product";
import { useProducts } from "../../contexts/products/productsContext";
import './ProductsContainer.scss';


export default function ProductsContainer() {
  const { filteredProducts, error } = useProducts();

  return (
      <div className="products-container">
        { 
          error 
          ? error 
          : filteredProducts.length 
            ? filteredProducts.map(product => <Product product={product} key={product.id}/>)
            : <div className="not-found">PRODUCTS NOT FOUND</div>
        }
      </div>
  );
}