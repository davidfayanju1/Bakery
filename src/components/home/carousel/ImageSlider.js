import React from 'react'
import { CarouselContainer } from './styledCarousel'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import sliderImage3 from '../../images/sliderImage3.jpg'
import sliderImage1 from '../../images/sliderImage1.jpg'



function ImageSlider() {

  return (
    <CarouselContainer>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ sliderImage3 }
                alt="First slide"
                 id="image"/>
                <Carousel.Caption>
                <h2>Our bread philosophy is balance.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ sliderImage1 }
                alt="Second slide"
                id="image"/>

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>handmade breads & pastries using traditional baking techniques.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </CarouselContainer>
  )
}

export default ImageSlider;