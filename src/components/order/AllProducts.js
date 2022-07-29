import React from 'react';
import aboutImage from '../images/aboutImage.jpeg';
import { AllProductsContainer, ProductCard } from './styledOrder';
import Spinner from 'react-bootstrap/Spinner';

function AllProducts({ products }) {

  return (
    <AllProductsContainer>
      {
       products.length === 0 ?
       
       <Spinner animation="border" />
       :
       products.map ((product) => (
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

export default AllProducts