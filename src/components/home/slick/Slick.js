import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselSlider, SlickContainer, SliderContainer } from './styledSlider';
import breadLeft from '../../images/breadLeft.jpeg'
import slickImage1 from '../../images/slickImage1.jpg'
import slickImage2 from '../../images/slickImage2.jpg'
import slickImage3 from '../../images/slickImage3.jpg'


const Slick = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
      };

  return (
    <SlickContainer>
        <CarouselSlider {...settings}>
            <SliderContainer>
                <img src={ breadLeft } alt="slickImage" />
            </SliderContainer>
            <SliderContainer>
                <img src={ slickImage1 } alt="slickImage" />
            </SliderContainer>
            <SliderContainer>
                <img src={ slickImage2 } alt="slickImage" />
            </SliderContainer>
            <SliderContainer>
                <img src={ slickImage3 } alt="slickImage" />
            </SliderContainer>
        </CarouselSlider>
    </SlickContainer>
    
  )

}

export default Slick