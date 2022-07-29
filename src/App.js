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


function App() {


  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState({});
  const [ cartError, setCartError ] = useState('');
  const [order, setOrder] = useState({})
  const [ errorMssg, setErrorMssg ] = useState('');

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

  const [ cartLoader, setCartLoader ] = useState(false);
  const [cartNote, setCartNote ] = useState(false);
  const addToCart = async (productId, quantity) => {


    try {

      setCartLoader(true)
      const item = await commerce.cart.add(productId, quantity)
      
      setCart(item.cart);

    }catch(error) {

      setCartError(error)

    }finally {
      setCartLoader(false);
      setCartNote(true);
    }
  }

  


  const [loading, setLoading ] = useState(false);

  const updateCart = async (productId, quantity) => {

    
    try{

      setLoading(true);     
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart)
    }catch(error) {

      console.log(error)
    }finally {

      setLoading(false);
    }

  }


  const removeFromCart = async (productId) => {

    
    try {
      setLoading(true);     
      const { cart } = await commerce.cart.remove(productId)
      setCart(cart);

    }catch(error) {
      console.log(error)
    }finally {

      setLoading(false);
    }

  };


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

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const { pathname }  = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      
      <>
        {pathname !== '/checkout' && <Nav cartItems = { cart.total_items }/>}
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/order/*" element = {<Order products={ products } />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/about" element = {<About />} />
          <Route path="/products/:id" element={<ProductDetails products={ products } addToCart = { addToCart } cartError={ cartError } cartLoader={ cartLoader } cartNote={ cartNote } setCartNote={ setCartNote }/>} />
          <Route path='/cart' element={ <Cart cart={ cart }  updateCart={updateCart} removeFromCart={ removeFromCart } loading={ loading }/>} />
          <Route path='/checkout' element={<Checkout cart={ cart } order={order} onCaptureCheckOut={ handleCaptureCheckout} error={errorMssg}/> } />
        </Routes>
        {pathname !== '/checkout' && <Footer />}
      </>
    </div>
  );
}

export default App;
