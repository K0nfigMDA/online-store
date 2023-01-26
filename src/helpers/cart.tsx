import { IProductCart } from '../interfaces/products';

export const cartSum = (cart: IProductCart[], percent: number) =>
   (
      ((100 - percent) / 100) *
      cart.reduce((acc, el) => acc + el.quantity * el.price, 0)
   ).toFixed(2);

export const cartQuantity = (cart: IProductCart[]) =>
   cart.reduce((acc, el) => acc + el.quantity, 0);






