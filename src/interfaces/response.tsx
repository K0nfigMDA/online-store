import { IProduct } from "./products";

export interface IResponseData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}