import Product from "../product/product";
import { useProducts } from "../../contexts/products/productsContext";
import './productsContainer.scss';


export default function ProductsContainer() {
  const { filteredProducts, error } = useProducts();

  return (
      <div className="products-container">
        { 
          error 
          ? error 
          : filteredProducts.length 
            ? filteredProducts.map(product => <Product product={product} key={product.id}/>)
            : 'PRODUCTS NOT FOUND'
        }
      </div>
  );
}