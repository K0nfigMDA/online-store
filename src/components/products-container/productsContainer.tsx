import Product from "../product/product";
import './productsContainer.scss';
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../../interfaces/products";

interface IQueryStringOptions {
  [key: string]: string[] | undefined;
}

interface IProductContainerProps {
  products: IProduct[];
  error: string;
}

export default function ProductsContainer({products, error}: IProductContainerProps) {
  const [searchParams] = useSearchParams();
  
  const queryParams: IQueryStringOptions = {};
  searchParams.forEach((v, k) => {
    queryParams[k] = v.split('↕');
  })

  return (
      <div className="products-container">
        { 
          error 
          ? error 
          : products
            .filter((prod) => {
              const inCategory = queryParams.category 
              ? queryParams.category.some(el => el.toLowerCase() === prod.category.toLowerCase())
              : true;

              const inBrand = queryParams.brand 
              ? queryParams.brand.some(el => el.toLowerCase() === prod.brand.toLowerCase())
              : true;

              const inPrice = queryParams.price 
              ? (
                prod.price >= Number(queryParams.price[0]) &&
                prod.price <= Number(queryParams.price[1])
                )
              : true;

              const inStock = queryParams.stock 
              ? (
                prod.stock >= Number(queryParams.stock[0]) &&
                prod.stock <= Number(queryParams.stock[1])
                )
              : true;

              return (inCategory && inBrand && inPrice && inStock);
            })
            .map(product => <Product product={product} key={product.id}/>) 
        }
      </div>
  );
}