import React from 'react';
// import { Link } from 'react-router-dom';
import { FlexContainer, ShowcaseContainer, ShowcaseWords, ImageFlex, ImageCard, ShowcaseButton, ShowcaseLink } from './styledShowcase';
import breadLeft from '../../images/breadLeft.jpeg';
import breadRight from '../../images/breadRight.jpeg';



const Showcase = () => {
  return (
    <ShowcaseContainer>
        <FlexContainer>
          <ShowcaseWords>
            <p>The Bakery - </p>
            <p>Select breads and pastries are now available for pickup and delivery.</p>
            <ShowcaseLink to={'/order'} id="link"><ShowcaseButton>Order now</ShowcaseButton></ShowcaseLink>
          </ShowcaseWords>

          <ImageFlex>

            <ImageCard>
              <img src={ breadLeft } alt="bread bakery" />

              <div className="card-text">
                <h2>Country Loaf</h2>
                <p>French Flour, Japanese Flour, Egg, Isigny Butter</p>
              </div>
            </ImageCard>

            <ImageCard>
              <img src={ breadRight } alt="bread bakery" />

              <div className="card-text">
                <h2>Cinnamon bun</h2>
                <p>French Flour, Egg, Isigny Butter, Cinnamon</p>
              </div>
            </ImageCard>
          </ImageFlex>


        </FlexContainer>
    </ShowcaseContainer>
  )
}

export default Showcase