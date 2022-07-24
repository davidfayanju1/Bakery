import React from 'react';
import styled from 'styled-components';

export const ReviewContainer = styled.section`

    margin-top: 4.5rem;
    min-height: 100vh;
    width: 100%;
    background-color: rgb(243, 243, 243);
    padding: 2rem 0rem;

    @media screen and (max-width: 768px) {

        padding: 0rem 0rem;
    }

`


export const ReviewCard = styled.div`

    width: 100%;
    max-width: 35rem;
    background-color: white;
    padding: 1.7rem 2rem;
    margin: 0 auto;


    .card-title {

        margin-bottom: 2rem;
    }

    .card-title::after {

        content: '';
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: rgb(243, 243, 243);

    }

    @media screen and (max-width: 768px) {


        .card-title {

            h1 {
                font-size: 1.45rem;
            }
        }

        height: 120vh;
        padding: 1.7rem .75rem;
    }

`


export const CardFlex = styled.div`

    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;
    min-height: 100%;
    margin-bottom: .85rem;

    .card-name {

        display: flex;
        align-items: flex-start;

        img {

            width: 4.3rem;
            height: 3.7rem;
            object-fit: cover;
        }

        p {
            margin-left: .75rem;
            font-weight: 500;
        }

        @media screen and (max-width: 768px) {

            p {
                font-size: .9rem;
            }
        }


        @media screen and (max-width: 318px) {

        img {
            width: 15vw;
            height: 15vw;
        }

        
        }
    }

    .card-amount {


        @media screen and (max-width: 768px) {

            p {
                font-size: .9rem;
            }
        }
    }
`

export const CardTotal = styled.div`    

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0rem;


    p {
        font-weight: 700;
    }

   /* @media screen and (max-width: 565px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6rem;
        border-top: 1px grey solid;
        padding: 1rem 1rem;


   } */

`


export const Payment = styled.div`

   display: flex;
   flex-direction: column;
   background-color: white;

@media screen and (max-width: 565px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 16rem;
        border-top: 1px grey solid;
        padding: 1rem 1rem;


   }


`
export const StripeButtons = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;


    button {

        width: 7rem;
        height: 2.3rem;
        border: 1px solid lightgrey;
        background-color: transparent;

    }

    button + button {

        border: none;
        background-color: black;
        color: white;
    }

`

