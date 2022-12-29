import { IProduct } from "../interfaces/products";

export const SEARCH_PARAM = 'search';

type searchFields = Omit<IProduct, 'id' | 'thumbnail' | 'images'>;

export const SEARCH_FIELDS: searchFields = {
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: ""
}