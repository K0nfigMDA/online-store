import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from '../interfaces/products';
import { IResponseData } from "../interfaces/response";


export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      const response = await axios.get<IResponseData>('https://dummyjson.com/products?limit=100');
      console.log(response.data);
      setProducts(response.data.products);
    } catch (error: unknown) {
      const err = error as AxiosError;
      setError(err.message);
    }
  }

  useEffect(() => {fetchProducts()}, []);
  
  return {products, error};
}