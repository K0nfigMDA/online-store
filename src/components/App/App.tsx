import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import CartPage from '../../pages/cart';
import MainStore from '../../pages/mainStore';
import ProductDetails from '../../pages/productDetails';
import { CartProvider } from '../../contexts/cart/cartContext';
import { ProductsProvider } from '../../contexts/products/productsContext';
import { ROUTES } from '../../constants/routes';
import NotFound from '../../pages/NotFound';


function App() {
  return (
		<>
      <ProductsProvider>
        <CartProvider>
          <Header/>
          <Routes>
            <Route path={ROUTES.ROOT} element={ < MainStore /> }></Route>
            <Route path={ROUTES.CART} element={ < CartPage /> }></Route>
            <Route path={`${ROUTES.PRODUCT_DETAILS}/:id`} element={ < ProductDetails /> }></Route>
						<Route path={ROUTES.NOT_FOUND} element={ < NotFound /> }></Route>
          </Routes>
          <Footer/>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
