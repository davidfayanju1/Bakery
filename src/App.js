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



function App() {


  // let products = [
  //   {image: breadLeft, name: 'Gift Card', price: 35, id: 1, categories: ['pastries']},
  //   {image: aboutImage3, name: 'Seed Loaf', price: 55, id: 2, categories: ['bread']},
  //   {image: aboutImage2, name: 'Cinnamon Sugar Loaf', price: 15, id: 3, categories: ['pastries']},
  //   {image: aboutImage3, name: 'Country Loaf', price: 65, id: 4, categories: ['bread']},
  
  // ]

  const [ products, setProducts ] = useState([])
  const [loading, setLoading ] = useState(true)


  const fetchProducts = async () => {

    try {

      const { data }  = await commerce.products.list()

      setProducts( data );
      // loading(false)
      
      // console.log( data[0].categories[0].name );

    }catch(error) {

      console.log('on your products', error);
    }    
  }

  // const [ pastries, setPastries ] = useState([]);

  // const pastriesArray = products.filter ((pastry) => pastry.categories[0].name === 'pastries')

  
  // console.log(products[0])

  // console.log(products[0] === undefined)

  useEffect(() => {

    fetchProducts();

  }, []);


  return (
    <div className="App">
      <GlobalStyles />
      
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/order/*" element = {<Order products={ products } />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/about" element = {<About />} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/products/:id" element={<ProductDetails products={ products } />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
