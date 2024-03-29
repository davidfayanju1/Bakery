import React, { useState, useEffect } from 'react'
import aboutImage from '../images/aboutImage.jpeg';
import { AllProductsContainer, ProductCard } from './styledOrder';
import Spinner from 'react-bootstrap/Spinner';
import { useAuth } from '../../context';

function Pastries() {

  const { products } = useAuth();

  const [ pastries, setPastries ] = useState([]);

  const pastriesArray = products.filter((pastry) => !pastry.name.includes('Loaf')); 
  
  useEffect (() => {
  
    setPastries(pastriesArray)

  }, [ products ])
  


  return (
    <AllProductsContainer>
      {
      pastriesArray.length === 0 ?
              
      <div className="product-spinner">
        <Spinner animation="border" />
      </div>
              
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