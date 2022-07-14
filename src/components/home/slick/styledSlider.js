import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'


export const CarouselSlider = styled(Slider)`

    width: 100%;
    height: 100%;
    text-align: center;

    
`

export const SlickContainer = styled.section`

    background-color: brown;
    /* margin-top: 5rem; */
    width: 100%;
    height: 64vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const SliderContainer = styled.div`

    width: 100%;
    height: 64vh;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`