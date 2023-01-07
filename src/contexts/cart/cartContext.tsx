import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { IProduct, IProductCart } from '../../interfaces/products';

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  cart: IProductCart[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
	removeItemFromCart: (product: IProduct) => void;
}

const CartContext = React.createContext<ICartContext>({
  cart: [], 
  addToCart: () => console.error('NoProviderValue'),
  removeFromCart: () => console.error('NoProviderValue'),
	removeItemFromCart: () => console.error('NoProviderValue')
});

export const useCart = () => {
  return useContext(CartContext);
}

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProductCart[]>([]);
  
  const addToCart = (product: IProduct) => {
    setCart((prev) => {
      const inCartEl = prev.find(el => el.id === product.id);
      if (!inCartEl) return [...prev, {...product, quantity: 1}];
      inCartEl.quantity += 1;
      return [...prev];
    });
  }

	const removeItemFromCart = (product: IProduct) => {
    setCart((prev) => {
      const inCartEl = prev.find(el => el.id === product.id);
      if (!inCartEl) return [...prev, {...product, quantity: 1}];
      inCartEl.quantity -= 1;
      return [...prev];
    });
  }

  const removeFromCart = (product: IProduct) => {
    setCart((prev) => {
      const newCart = [...prev];
      return newCart.filter((el) => el.id !== product.id);
    })
  }


	function setLocalStorage() {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	function getLocalStorage() {
		if(localStorage.getItem('cart')) {
			setCart(JSON.parse(localStorage.getItem('cart') as string))
		}
	}
	
	useEffect(() => {
		getLocalStorage()
	}, [])


	useEffect(() => {
		setLocalStorage()
	}, [cart])


  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
			removeItemFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}