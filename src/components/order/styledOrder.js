import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const OrderContainer = styled.section`

    width: 100%;
    min-height: 77rem;
    margin-top: 4.32rem;
    display: flex;
    /* align-items: center; */
    padding: 0rem !important;

    @media screen and (max-width: 768px) {

        flex-direction: column;
    }

`

export const Aside = styled.aside`

    align-self: flex-start;
    position: sticky;
    top:10.5%;
    left: 0;
    bottom: 5%;
    right: 0;
    width: 20%;
    padding: 1.25rem 0rem;

    li {
        list-style: none;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        margin-bottom: 1.6rem;
        width: 100%;
        display: block;
    }

    @media screen and (max-width: 768px) {

        width: 100%;
        position: static;


        li {
            display: inline;
        }

        li:nth-child(1) {
            display: none;
        }

        li:nth-child(3) {
            margin-left: 0.5rem;
        }

        a {
            display: inline;
            margin-bottom: 0rem;
        }
    }

    
`

export const OrderContent = styled.div`

    width: 80%;
    min-height: 100%;
    padding: 1.35rem 2.2rem;


    @media screen and (max-width: 768px) {

        width: 100%;

    }


`

// all products subComponent

export const AllProductsContainer = styled.div`

    min-height: 50%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1.5rem;
    align-items: start;

`

export const ProductCard = styled(Link)`

    height: 51vh;
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