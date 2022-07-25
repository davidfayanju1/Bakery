import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import About from './pages/About';
import Blog from './pages/Blog';
import Nav from './components/compound/Nav';
import Footer from './components/compound/Footer';
import ProductDetails from './components/order/details/ProductDetails';
import { commerce } from './lib/commerce'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {


  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState({});
  const [ cartError, setCartError ] = useState('');

  const fetchProducts = async () => {

    try {

      const { data }  = await commerce.products.list()

      setProducts( data );
      
    }catch(error) {

      console.log('on your products', error);
    }    
  }

  const fetchCart = async () => {

    try{

      const cart = await commerce.cart.retrieve();
      
      setCart(cart)
      

    }catch(error){

      console.log(error)

    }
  }

  const addToCart = async (productId, quantity) => {


    try {

      const item = await commerce.cart.add(productId, quantity)
      
      setCart(item.cart)

    }catch(error) {

      setCartError(error)

    }
  }


  const updateCart = async (productId, quantity) => {

    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)

  }


  const removeFromCart = async (productId) => {

    const { cart } = await commerce.cart.remove(productId)
    

    setCart(cart);

  };


  const refreshCart = async () => {

      const newCart = await commerce.cart.refresh();
      setCart(newCart);
  }

  const [order, setOrder] = useState({})
  const [ errorMssg, setErrorMssg ] = useState('');
  
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {

      try {

        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

        setOrder(incomingOrder)
        refreshCart();

      }catch(error) {

        setErrorMssg(error.data.error.message)

      }


  }

  const [show, setShow ] = useState(true);


  useEffect(() => {

    fetchProducts();
    fetchCart();



  }, []);

 


  return (
    <div className="App">
      <GlobalStyles />
      
      <BrowserRouter>
        {show && <Nav cartItems = { cart.total_items }/>} 
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/order/*" element = {<Order products={ products } />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/about" element = {<About />} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/products/:id" element={<ProductDetails products={ products } addToCart = { addToCart } cartError={ cartError }/>} />
          <Route path='/cart' element={ <Cart cart={ cart }  updateCart={updateCart} removeFromCart={ removeFromCart }/>} />
          <Route path='/checkout' element={<Checkout setShow = { setShow } cart={ cart } order={order} onCaptureCheckOut={ handleCaptureCheckout} error={errorMssg}/> } />
        </Routes>

        {show && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
