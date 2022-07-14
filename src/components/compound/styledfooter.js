import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.section`

    height: 20rem;
    width: 100%;
    margin-top: 0rem;
    padding: 4rem 1.7rem;

    @media screen and (max-width: 768px) {

        min-height: 35rem;

    }

    

`

export const FooterFlexContainer = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 768px) {

        flex-direction: column; 
    }

`

export const FooterFlexItems = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 43%;
    height: 100%;


    @media screen and (max-width: 768px) {

        width: 100%;

    }

`

export const FirstItemContainer = styled.div`

    width: 40%;
    height: 100%;

    h2 {
        margin-bottom: 3.5rem;
        font-weight: lighter;
        font-size: 1.3rem;
    }

    h2 + p {
        margin-bottom: 1.95rem;
    }

    h2 > p {
        font-size: 0.9rem;
    }

`

export const SecondItemContainer = styled.div`

    width: 20%;

    ul {
        list-style: none;
        margin-bottom: 2.5rem;
    }

    li {
        margin-bottom: 0.4rem;

            a {
                text-decoration: none;

                color: #AF524B;

                &::after {
                content: '';
                display: block;
                width:2.8rem;
                height: 0.05rem;
                background-color: #AF524B;
                border-radius: 10px;
            }

        }

        
    }


`

export const FooterIcons = styled.div`

    width: 100%;

    & > * {
        margin-left: 1rem;
        color: black;
    }

    a {
        color: black;
    }

`



export const FooterForm = styled.div`

    width: 46%;

    p {
        margin-bottom: 4rem;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 768px) {

        width: 100%;

        P {
            margin-bottom: 3rem;
        }
    }

`

export const FooterFormElements = styled.div`

    input {
        width: 52%;
        height: 4.5rem;
        padding: 0rem 1rem;
        outline: none;
        border: #E0E0E0 2px  solid;
        font-size: 16px;

        &::placeholder {
            font-size: 1rem;
        }

    }

    button {
        width: 25%;
        background-color: #AF524B;
        color: white;
        border: none;
        outline: none;
        height: 4.5rem;
        margin-left: 0.5rem;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
            background-color: #BF756F;
        }
    }

    @media screen and (max-width: 768px) {

        width: 100%;

        input {
            width: 65%;
        }

        button{
            
            width: 30%;

        }

    }

`