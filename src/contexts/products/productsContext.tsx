import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchedProducts } from '../../hooks/useProducts';
import { IProduct } from '../../interfaces/products';

interface IQueryStringOptions {
  [key: string]: string[] | undefined;
}

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  allProducts: IProduct[];
  filteredProducts: IProduct[];
  error: string;
}

const ProductsContext = React.createContext<IProductsContext>({
  allProducts: [],
  filteredProducts: [],
  error: ''
});

export const useProducts = () => {
  return useContext(ProductsContext);
}

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const {products: allProducts, error} = useFetchedProducts();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(allProducts);

  const filterProducts = useCallback((allProducts: IProduct[], searchParams: URLSearchParams) => {
    const queryParams: IQueryStringOptions = {};
    searchParams.forEach((v, k) => {
      queryParams[k] = v.split('↕');
    })

    setFilteredProducts(allProducts.filter((prod) => {
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
    )
  }, []);

  useEffect(() => {
    filterProducts(allProducts, searchParams);
    
  }, [allProducts, searchParams, filterProducts]);
  
  return (
    <ProductsContext.Provider value={{
      allProducts,
      filteredProducts,
      error
    }}>
      {children}
    </ProductsContext.Provider>
  );
}