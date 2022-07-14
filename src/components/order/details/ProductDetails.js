import React from 'react'
import { useParams } from 'react-router-dom';
import { DetailsContainer, Product, DetailsFlex, ImageSection, DetailsSection, IngredientsFlex, Ingredients, OthersGrid, OtherProducts, OtherProductsCard } from './styledProductDetails'
import { Link } from 'react-router-dom'

function ProductDetails( { products }) {

    const { id } = useParams();

  return (
    <DetailsContainer>
      { products.map((product) => (

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
              <p>{ product.description }</p>
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" value={1} min="1" name="quantity"/>
              </div>
              <button><Link to='/'>Add To Cart</Link></button>
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

                    <OtherProductsCard to={`/products/${ item.id }`} key={item.id}>
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