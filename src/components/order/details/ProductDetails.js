import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsContainer, Product, DetailsFlex, ImageSection, DetailsSection, IngredientsFlex, Ingredients, OthersGrid, OtherProducts, OtherProductsCard } from './styledProductDetails'
import Spinner from 'react-bootstrap/Spinner';
import ScrollToTop from "react-scroll-to-top";
import Toast from 'react-bootstrap/Toast';
import { useAuth } from '../../../context';


function ProductDetails() {

    const { products, addToCart, cartError, cartLoader, cartNote, setCartNote } = useAuth();
    const { id } = useParams();
    const [ value, setValue ] = useState('');
    const [ pageError, setPageError ] = useState(true);
    const navigate = useNavigate()

    const takeInput = (e) => {

      if (e.target.value === '0'){

        setPageError(true)

      } else if ( e.target.value === '') {

        setPageError(true)
        
      } else {

        setValue(e.target.value);
        setPageError(false);

      }

    }    
  useEffect (() => {
      
      setTimeout (() => {
  
        setCartNote(false);
  
      }, 3000)

  }, [cartNote])


  return (
    <DetailsContainer>

      <>
      {
        cartNote ?

          <Toast className="toast">
            <Toast.Header>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>New Item has been added to cart!</Toast.Body>
          </Toast>

        :

        null
      }

      </>
      {
      products.length === 0 ?
        <div className="details-spinner">
          <Spinner animation="border" />
        </div>
       :      
        products.map((product) => (

        product.id.toString() === id && product !== undefined ? 

        <Product key={product.id}>
          <DetailsFlex>
            <ImageSection>
              <img src={ product.assets[0].url } alt="details page" />
              <img src={ product.assets[1].url } alt="details page" />
            </ImageSection>
            <DetailsSection>
              <h2>{product.name}</h2>
              <p>{product.price.formatted_with_symbol}</p>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" min="1" name="quantity" onChange = { takeInput }/>
              </div>
              <button onClick={ () => { addToCart(product.id, value)}} disabled={ pageError || cartLoader ? true : false }>{ cartLoader ? <Spinner animation="border" variant="light" size="sm"/> : 'Add To Cart'}</button>
            </DetailsSection>
          </DetailsFlex>
          <Ingredients>
            <IngredientsFlex>
              <div className="indgredient-desc">
                <h1>Ingredients</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae id autem, qui voluptatum accusantium consectetur.</p>
              </div>
              <img src={ product.image.url } alt="ingredients" />
            </IngredientsFlex>
          </Ingredients>
          
          {/* 'You may also Like' page */}

          <OtherProducts>
            <div className="products_title">
              <h1>You Might Also Like</h1>
            </div>

              <OthersGrid>
                { 
                  product.related_products.map((item) => (

                    <OtherProductsCard  key={item.id} to={`/products/${ item.id }`} onClick = { <ScrollToTop smooth /> }>
                      <img src={item.image.url} alt="small item pics" />

                      <h2>{item.name}</h2>
                      <p>{item.price.formatted_with_symbol}</p>
                    </OtherProductsCard>

                  ))
                }
              </OthersGrid>            
          </OtherProducts>

        </Product> : null


      ))}  
    </DetailsContainer>
  )


}

export default ProductDetails