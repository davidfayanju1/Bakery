import React from 'react';
import aboutImage from '../images/aboutImage.jpeg';
import { AllProductsContainer, ProductCard } from './styledOrder';

function AllProducts({ products }) {

    // console.log(products[0])

  return (
    <AllProductsContainer>
      {
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