import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sortOption, SORT_CRITERIA, SORT_OPTIONS, SORT_ORDER, SORT_PARAM } from '../../components/sort/sortSelect';
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

    const newProducts = allProducts.filter((prod) => {
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
    });
    return newProducts;
  }, []);

  const sortProducts = useCallback((products: IProduct[], searchParams: URLSearchParams) => {
    const sortParam = searchParams.get(SORT_PARAM) as sortOption;
    if (!sortParam) return products;
    if (!SORT_OPTIONS.includes(sortParam)) return products;

    const paramsMap = new Map<SORT_CRITERIA, keyof IProduct>([
      [SORT_CRITERIA.price, 'price'],
      [SORT_CRITERIA.rating, 'rating'],
      [SORT_CRITERIA.discount, 'discountPercentage']
    ]);
    
    const [sortCriterion, sortOrder] = sortParam.split('-') as [SORT_CRITERIA, SORT_ORDER];
    const sortBy = paramsMap.get(sortCriterion) as keyof IProduct;
    
    if (sortOrder === 'ASC') {
      return [...products].sort((a, b) => (a[sortBy] as number) - (b[sortBy] as number));
    } else {
      return [...products].sort((a, b) => (b[sortBy] as number) - (a[sortBy] as number));
    }
  }, []);

  useEffect(() => {
    const newProductsFiltered = filterProducts(allProducts, searchParams);
    const newProducts = sortProducts(newProductsFiltered, searchParams);
    setFilteredProducts(newProducts);    
  }, [allProducts, searchParams, filterProducts, sortProducts]);
  
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