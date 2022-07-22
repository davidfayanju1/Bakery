import React from 'react';
import styled from "styled-components";

export const AboutContainer = styled.section`

    margin-top: 4.32rem;
    width: 100%;

`


export const AboutHero = styled.div`

    width: 100%;
    height: 60vh;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`

export const SectionContainer = styled.section`

    width: 100%;
    height: 120vh;
    padding: 3rem 12rem;


    @media screen and (max-width: 768px) {

        padding: 3rem 1.5rem;

    }

`

export const AboutFlexContainer = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .story-texts {
        width: 45%;

        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.05rem;
        }
    }

    .story-image {
        width: 45%;
        display: flex;
        height: 100%;
        align-items: center;

        img {
            width: 50%;
            margin-right: 0.85rem;
            height: 50%;
        }

        img:nth-child(1) {
            margin-bottom: 10rem;
        }

        img:nth-child(2) {
            margin-top: 10rem;
        }

    }


    @media screen and (max-width: 768px) {

        flex-direction: column;
        width: 100%;

        .story-texts {

            width: 100%;

            h1 {
                font-size: 3rem;
                margin-bottom: 2rem;
            }

            p {
                font-size: 1.05rem;
            }

            margin-bottom: 3rem;
        }

        .story-image {
            width: 100%;
            display: flex;
            height: 100%;
            align-items: center;

            img {
                width: 50%;
                height: 60%;
                margin-right: 0.85rem;
            }

        
        }

    }

`


export const SecondFlexContainer = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .story-image {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        img {
            width: 18rem;
            height: 22rem;
        }

    }


    .story {
        width: 41%;

        h1 {
            font-size: 4rem;
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.05rem;
        }
    }


    @media screen and (max-width: 768px) {

        flex-direction: column;
        margin-top: 4rem;

        .story-image {
            width: 100%;
            align-items: flex-start;
            justify-content: flex-start;

            img {
                width: 13rem;
                height: 22rem;
            }

        }


        .story {
            width: 100%;

            h1 {
                font-size: 3rem;
                margin-bottom: 2rem;
            }

            p {
                font-size: 1.05rem;
            }
        }
    }

`