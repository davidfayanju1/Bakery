import React from 'react';
import styled from 'styled-components';

export const JumbotronContainer = styled.section`

    padding: 6rem 1.7rem;
    width: 100%;
    min-height: 48rem;

    img {
        width: 100%;
        height: 40rem;
        object-fit: cover;
        margin-bottom: 6rem;
    }

    p {
        font-size: 3.85rem;
        width: 79%;

        @media screen and (max-width: 1031px) {

                width: 100%;

        }
    }

    @media screen and (max-width: 768px) {

        padding: 3rem 1rem;

        img {
            
            height: 90%;
        }

        p {
            font-size: 2.24rem;
            width: 100%;
            margin-bottom: 4rem;
        }

    }


`