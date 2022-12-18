import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CartPage from '../../pages/cart';
import MainStore from '../../pages/mainStore';
import ProductDetails from '../../pages/productDetails';


function App() {
  return (
    <>
		  <h1></h1>
      <Routes>
        <Route path='/' element={ < MainStore /> }></Route>
        <Route path='/cart' element={ < CartPage /> }></Route>
        <Route path='/product-details' element={ < ProductDetails /> }></Route>
      </Routes>
    </>
  );
}

export default App;
