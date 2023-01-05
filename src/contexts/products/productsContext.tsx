import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterProducts, searchProducts, sortProducts } from '../../helpers/products';
import { useFetchedProducts } from '../../hooks/useProducts';
import { IProduct } from '../../interfaces/products';


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

  useEffect(() => {
    const newProductsFiltered = filterProducts(allProducts, searchParams);
    const newProductsSearched = searchProducts(newProductsFiltered, searchParams);
    const newProducts = sortProducts(newProductsSearched, searchParams);
    setFilteredProducts(newProducts);    
  }, [allProducts, searchParams]);
  
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