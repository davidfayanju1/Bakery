import React from 'react';
import styled from 'styled-components';
// import { MdCancel } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';


export const CartContainer = styled.section`

    margin-top: 4.32rem;
    padding: 3.5rem 2rem;
   

    @media screen and (max-width: 1000px) {


        padding: 3.5rem 0.9rem;

    }

`

export const CartCard = styled.div`
    width: 100%;
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    border-bottom: lightgray 1px solid;
    padding: 22px 0;


    /* @media screen and (max-width: 1000px) {
        
        height: 5.5rem;

    } */



`


export const ItemImage = styled.div`

    display: inline-block;
    flex-shrink: 0;
    position: relative;
    vertical-align: middle;
    width: 132px;
    margin-right: 22px;


    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        margin-right: 1rem;
    }


    /* @media screen and (max-width: 1000px) {


        img {
            height: 5rem;
            width: 5.5rem;
            margin-right: 0.5rem;

        }
    } */

`

export const ItemName = styled.div`

    display: inline-block;
    flex-grow: 1;
    margin-bottom: 22px;
    margin-right: 55px;
    min-width: 90px;
    vertical-align: middle;

    p {
        color: inherit;
        font-family: inherit;
        font-size: 16px;
        line-height: 22px;
        box-sizing: border-box;
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
    }

`


export const QuantityFlex = styled.div`

    display: flex;
    min-width: 90px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    button {
        background-color: transparent;
        border: none;
        border-radius: 100%;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }


    p {
        padding: 0rem 1.5rem;
        /* margin-top: 1rem; */
        font-size: 1.3rem; 
    }


    .quantity-icon {
        font-size: 1.1rem;
        padding: 0.1rem;
        width: 1.9rem;
        height: 1.9rem;
    }

    button:hover {
        background-color: lightgrey;
    }


    @media screen and (max-width: 1000px ) {


        p {
            padding: 0rem 1rem;
            margin-top: 1rem;
            font-size: 1rem; 
        }

        .quantity-icon {
            font-size: 1.1rem;
            width: 1.9rem;
            height: 1.9rem;
            cursor: pointer;
        }

    }


`

export const Icon = styled(FaTimes)`

    display: inline-block;
    margin-left: 22px;
    vertical-align: middle;
    border-radius: 100%;
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
    font-weight: lighter;
    padding: 0.2rem;

    &:hover {

        background-color: lightgrey;
    
    }

`


export const ItemPrice = styled.div`

    display: inline-block;
    min-width: 20vw;
    text-align: right;
    vertical-align: middle;
    white-space: nowrap;

    p {
        font-size: 1.2rem;
    }



    @media screen and (max-width: 1000px) {

        height: 1.6rem;


        p {
            font-size: 1rem;

        }
    }



`



export const CartTotalSection = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 6rem;

`


export const CartTotal = styled.div`

    width: 35%;
    height: 100%;


    .cart-total-flex {
        display: flex;
        justify-content: space-between;
        width: 100%;

        p {
            font-size: 1.2rem;
        }

        p + p {
            font-size: 1.5rem;
        } 
    }


    button {
        width: 100%;
        height: 2.4rem;
        background-color: black;
        color: white;
        border: none;
        outline: none;
    }


    @media screen and (max-width: 768px) {

        width: 100%;
    }

`
