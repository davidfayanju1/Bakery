import React, { useState, useEffect } from 'react'
import aboutImage from '../images/aboutImage.jpeg';
import { AllProductsContainer, ProductCard } from './styledOrder';
import Spinner from 'react-bootstrap/Spinner';


function Pastries({ products }) {

  const [ pastries, setPastries ] = useState([]);

  const pastriesArray = products.filter((pastry) => !pastry.name.includes('Loaf')); 
  
  useEffect (() => {
  
    setPastries(pastriesArray)

  }, [ products ])
  


  return (
    <AllProductsContainer>
      {
      pastriesArray.length === 0 ?
              
       <Spinner animation="border" />
              
        :

        pastriesArray.map ((product) => (
          <ProductCard key= {product.id} to={`/products/${ product.id }`}>
              <img src={product.image.url} alt="bread bread" />
              <h3>{ product.name }</h3>
              <p>{product.price.formatted_with_symbol}</p>
          </ProductCard>
        ))
      }
    </AllProductsContainer>
  )
}

export default Pastries