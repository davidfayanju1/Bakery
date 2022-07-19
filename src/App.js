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
import aboutImage from './components/images/aboutImage.jpeg';
import aboutImage3 from './components/images/aboutImage3.jpeg'
import aboutImage2 from './components/images/aboutImage2.jpeg'
import breadLeft from './components/images/breadLeft.jpeg'
import { commerce } from './lib/commerce'
import Cart from './pages/Cart';



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


  useEffect(() => {

    fetchProducts();
    fetchCart();

  }, []);


  return (
    <div className="App">
      <GlobalStyles />
      
      <BrowserRouter>
        <Nav cartItems = { cart.total_items }/> 
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/order/*" element = {<Order products={ products } />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/about" element = {<About />} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/products/:id" element={<ProductDetails products={ products } addToCart = { addToCart } cartError={ cartError }/>} />
          <Route path='/cart' element={ <Cart cart={ cart }/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
