import React from 'react';
import styled from 'styled-components';

export const MenuContainer = styled.section`

    margin-top: 4.35rem;
    width: 100%;


`

export const ImageContainer = styled.div`

    width: 100%;

    img {
        width: 100%;
        height: 35rem;
    }


`

export const MenuFlexContainer = styled.div`

    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6.5rem 12rem;



    @media screen and (max-width: 768px) {
        padding: 6.5rem 2rem;
    }

`

export const MenuFlexItems = styled.div`

        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        min-height: 25rem;
        margin-bottom: 8rem;


        small {
                display: block;
                margin-bottom: 4rem;
                font-weight: bold;
        }



        @media screen and (max-width: 989px) {

            flex-direction: column;
            width: 100%;
            text-align: left;
        }




`

export const ItemCard = styled.div`

    width: 24rem;
    text-align: left;
    margin-bottom: 3rem;
    height: 5rem;

    

    h3 {
        font-size: 1.2rem;
    }

    p {
        font-size: 1rem;
    }


    @media screen and (max-width: 989px) {
        width: 83vw;
    }


    &::after {
        content: '';
        width: 100%;
        display: block;
        height: 0.1rem;
        background-color: grey;
        margin-top: 1.7rem;
       
    }


`