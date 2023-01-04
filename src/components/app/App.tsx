
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import CartPage from '../../pages/cart';
import MainStore from '../../pages/mainStore';
import ProductDetails from '../../pages/productDetails';
import { CartProvider } from '../../contexts/cart/cartContext';
import { ProductsProvider } from '../../contexts/products/productsContext';

function App() {
  return (
		<>
      <ProductsProvider>
        <CartProvider>
          <Header/>
          <Routes>
            <Route path='/' element={ < MainStore /> }></Route>
            <Route path='/cart' element={ < CartPage /> }></Route>
            <Route path='/product-details' element={ < ProductDetails /> }></Route>
          </Routes>
          <Footer/>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
