import React, { useState, useEffect } from 'react'
import aboutImage from '../images/aboutImage.jpeg';
import { AllProductsContainer, ProductCard } from './styledOrder';
import Spinner from 'react-bootstrap/Spinner';



function Bread({products}) {

  const [ breads, setBreads ] = useState([]);

  const breadArray = products.filter((bread) => bread.name.includes('Loaf')); 
  
  useEffect (() => {
  
    setBreads(breadArray)

  }, [ products ])


  return (
    <AllProductsContainer>
      {
        breads.length === 0 ?
        <div className="product-spinner">
          <Spinner animation="border" />
        </div>      
        
        :

        breads.map ((product) => (

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

export default Bread