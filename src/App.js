import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import About from './pages/About';
import Nav from './components/compound/Nav';
import Footer from './components/compound/Footer';
import ProductDetails from './components/order/details/ProductDetails';
import { commerce } from './lib/commerce'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import { BakeryProvider } from './context';


function App() {
  const [ cart, setCart ] = useState({});
  const [order, setOrder] = useState({})
  const [ errorMssg, setErrorMssg ] = useState('');
   
  const refreshCart = async () => {

      const newCart = await commerce.cart.refresh();
      setCart(newCart);
  }

  
  
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {

      try {

        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
        setOrder(incomingOrder)
        refreshCart();

      }catch(error) {

        setErrorMssg(error.data.error.message)

      }


  }


  const { pathname }  = useLocation();

  return (
    <div className="App">
      <BakeryProvider>
        <GlobalStyles />
        
        <>
          {pathname !== '/checkout' && pathname !== '/confirmation' && <Nav />}
          <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route path="/order/*" element = {<Order />} />
            <Route path="/menu" element = {<Menu />} />
            <Route path="/about" element = {<About />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout /> } />
            <Route path='/confirmation' element={<Confirmation />} />
          </Routes>
          {pathname !== '/checkout' && pathname !== '/confirmation' && <Footer />}
        </>
      </BakeryProvider>
    </div>
  );
}

export default App;
