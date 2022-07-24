import styled from 'styled-components';
import React from 'react';

export const CheckoutContainer = styled.section`

    height: 100%;
    width: 100%;

`

export const CheckoutNav = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.5rem;
    padding: 2rem 6rem;
    background-color: white;
    display: flex;
    align-items: center;
    border-bottom: lightgrey 1px solid;

    h1 {
        font-size: 1.75rem;

        a {
            text-decoration: none;
            color: black;
        }


        @media screen and (max-width: 768px) {

            font-size: 1.6rem;

        }
    }


    @media screen and (max-width: 768px) {

        padding: 2rem .9rem;

    }


`

export const CheckoutForm = styled.div`

    margin-top: 4.5rem;
    width: 100%;
    background-color: rgb(243, 243, 243);
    padding: 2rem 0rem;
    height: 100vh;

    .form-title {
        margin: 0 auto;
    }


    @media screen and (max-width: 768px) {
        
        padding: 0rem 0rem;
        
    }

`

export const Form = styled.div`

    width: 100%;
    max-width: 35rem;
    background-color: white;
    padding: 1.7rem 2rem;
    margin: 0 auto;


    .form-title {

        margin-bottom: 2rem;
    }

    .form-title::after {

        content: '';
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: rgb(243, 243, 243);

    }

    form {


        .submit-button {

            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {

                width: 7rem;
                height: 2.3rem;
                border: 1px solid lightgrey;
                background-color: transparent;
            }

            a + button {

                color: white;
                background-color: black;
                border: none;

                &:hover {
                    background-color: #333333; 
                }
            }


            a { 
                    
                    text-decoration: none;
            }


        }
    }

    @media screen and (max-width: 768px) {
        height: 100vh;
    }


`

export const FormFlex = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {

        flex-direction: column;

    }
    
    
    @media screen and (max-width: 768px) {

        margin-bottom: 0rem;

    }


`


export const FormGroup = styled.div`

    width: 48%;

    label {
        display: block;
        font-size: 0.87rem;
    }

    input {
        width: 100%;
        height: 3rem;
        border: lightgrey 1px solid;
        outline: none;
        padding: 1rem 1rem;
        font-size: 16px;

        &::placeholder {
        
            font-size: 0.9rem;
        }
    }


    select {

        width: 100%;
        height: 3rem;
        border: lightgrey 1px solid;
        outline: none;
        padding: 0rem 1rem;

        /* &::placeholder {
        
            font-size: 0.9rem;
        } */

    }


   


    @media screen and (max-width: 768px) {

        width: 100%;
        margin-bottom: 1.3rem;
    }


`

export const CityFormGroup = styled(FormGroup)`

    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }

`