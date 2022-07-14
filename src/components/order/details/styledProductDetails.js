import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsContainer = styled.div`

    margin-top: 4.32rem;
    min-height: 30rem;
    padding: 6rem 2rem;

`


export const Product = styled.div`

    width: 100%;
    height: 100%;


`

export const DetailsFlex = styled.div`

    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }


`

export const ImageSection = styled.div`

    width: 50%;
    height: 100%;

    img {
        width: 100%;
        margin-bottom: 4rem;
        height: 30rem;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {

        width: 100%;

        img {
            margin-bottom: 1.45rem;
            height: 22rem;  
        }

        img:nth-child(2) {
            
            display: none;
        }
    }
`

export const DetailsSection = styled.div`

    width: 41%;
    position: sticky;
    top: 15%;
    left: 0;
    right: 0;
    bottom: 5%;
    padding: 4rem 0rem;
    align-self: flex-start;

    h2 {
        font-size: 3.6rem;
        margin-bottom: 2rem;
    }

    h2 + p {
        font-size: 2rem;
        margin-bottom: 1.7rem;
    }

    p + p {
        font-size: 1.1rem;
        margin-bottom: 1.7rem;
    }

    button {
        border: none;
        outline: none;
        background-color: black;
        color: white;
        height: 2rem;
        width: 17rem;

        a {
            text-decoration: none;
            color: white;
        }



        &:hover {
            background-color: #333333;
        }
    }


    .quantity {
        
        margin-bottom: 2rem;

        label {
            font-size: 1.3rem;
            display: block;
            margin-bottom: 0.85rem;
        }

        input {
            width: 8rem;
            height: 5rem;
            border: black 1px solid;
            outline: none;
            padding: 1rem 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        position: static;
        width: 100%;
        padding: 0rem;
        
        h2 {
            font-size: 2.4rem;
            margin-bottom: 2rem;
        }

        h2 + p {
            font-size: 1.7rem;
            margin-bottom: 1.7rem;
        }

        p + p {
            font-size: 1rem;
            margin-bottom: 1.7rem;
        }
    }


`

export const Ingredients = styled.div`

    width: 100%;
    height: 36rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const IngredientsFlex = styled.div`

    height: 21rem;
    min-width: 43rem;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 50%;
        height: 100%;
    }

    div {
        width: 42.3%;

        h1 {
            font-size: 4rem;
            margin-bottom: 1.2rem;
        }
    }


    @media screen and (max-width: 768px) {
        flex-direction: column;

        width: 100%;
        min-width: 100%;

        img {
            width: 100%;
        }

        div {
            width: 100%;

            h1 {
                font-size: 2.7rem;
                word-wrap: wrap;
            }
        }
    }


`

// you might also like


export const OtherProducts = styled.div`

    width: 100%;
    height: 100%;
    margin-top: 4rem;

    .products_title {

        
        margin-bottom: 2rem;

        h1 {
            font-size: 4rem;
        }

    }

    @media screen and (max-width: 768px) {
        .products_title {

        

            h1 {
                font-size: 2rem;
            }

        }   
    }

    

`

export const OthersGrid = styled.div`

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 300px, 1fr));
    grid-gap: 2rem;

    


`

export const OtherProductsCard = styled(Link)`
   

    height: 21rem;
    text-align: center;
    text-decoration: none;
    color: black;

    img {
        width: 100%;
        height: 65%;
        object-fit: cover;
        margin-bottom: 1.1rem;
    }

    &:hover {
        color: black;   
    }

`