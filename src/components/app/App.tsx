import Header from '../header/header';
import Footer from '../footer/footer';
import { Routes, Route } from 'react-router-dom';
import { CartPage } from '../../pages/cart';
import MainStore from '../../pages/mainStore';
import ProductDetails from '../../pages/productDetails';
import { CartProvider } from '../../contexts/cart/cartContext';

function App() {
   return (
      <>
         <CartProvider>
            <Header />
            <Routes>
               <Route path="/" element={<MainStore />}></Route>
               <Route path="/cart" element={<CartPage />}></Route>
               <Route
                  path="/product-details"
                  element={<ProductDetails />}
               ></Route>
            </Routes>
            <Footer />
         </CartProvider>
      </>
   );
}

export default App;
