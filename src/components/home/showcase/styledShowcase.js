import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const ShowcaseContainer = styled.section`
    height: 100%;
    width: 100%;
    padding: 9rem 1.7rem;


    @media screen and (max-width: 768px ) {
        padding: 4.5rem 1.7rem;
    }
`

export const FlexContainer = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px){

        & {
            flex-direction: column;
        }
    }

`

export const ShowcaseWords = styled.div`

    width: 24%;
    line-height: 1.5;

    p {
        margin-bottom: 1.3rem;
    }

    p + p {
        font-size: 1.45rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 4.5rem;
    }
`

export const ShowcaseLink = styled(Link)`

    text-decoration: none;

`

export const ShowcaseButton = styled.button`

    background-color: black;
    color: white;
    text-decoration: none;
    height: 4rem;
    width: 100%;
    padding: 2rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    outline: none;

    &:hover {
        background-color: #333333;
    }

`

export const ImageFlex = styled.div`

    width: 68%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100%;
        height: 23rem;
        object-fit: cover;
    }

    .card-text {

        h2 {
            margin: 1rem 0rem 2rem 0rem;
            font-weight: lighter;
            font-size: 2rem;
        }

        p{
            margin-bottom: 2rem;
            font-size: 1.1rem;

        }
    }

    @media screen and (max-width: 768px) {

        width: 100%;

        img {
            height: 10rem;
        }


        .card-text {

            h2 {
                
                font-size: 1.4rem;
            }

            p{
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }

`

export const ImageCard = styled.div`

    width: 49.5%;
    height: 29rem;

    @media screen and (max-width: 768px) {
        height: 19rem;
        width: 48%;
    }

`



