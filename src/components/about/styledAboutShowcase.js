import React from 'react';
import styled from "styled-components";

export const AboutContainer = styled.section`

    margin-top: 4.32rem;
    width: 100%;
    height: 100%;

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
    min-height: 90vh;
    padding: 3rem 12rem;


    @media screen and (max-width: 1060px) {

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
        justify-content: space-between;

        img {
            width: 48%;
            height: 71%;
            object-fit: cover;
        }

        img:nth-child(1) {
            margin-bottom: 10rem;
        }

        img:nth-child(2) {
            margin-top: 10rem;
        }

    }


    @media screen and (max-width: 1060px) {

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

            /* margin-bottom: 3rem; */
        }


        .story-image {

            width: 100%;

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
        height: 100%;
        justify-content: center;

        img {
            width: 48%;
            height: 71%;
            object-fit: cover;
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


    @media screen and (max-width: 1060px) {

        margin-top: -10rem;
        flex-direction: column;
        height: 80%;

        .story-image {
            width: 100%;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 2rem;

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