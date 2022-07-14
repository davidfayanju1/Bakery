import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavHeader = styled.header`
    background-color: rgb(243, 243, 243);
    width: 100%;
    height: 4.32rem;
    padding: 1rem 3rem;
    position: fixed;
    top: 0;
    display: flex; 
    align-items: center;
    /* backdrop-filter: blur(5px); */
    z-index: 1;
`

export const DesktopNav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

export const NavItems = styled.div`

    display: flex;
    height: 100%;
    width: 38%;

    .nav-title {

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        min-width: 16rem;

        #titleLink {
            text-decoration: none;
            font-size: clamp(1.2rem, 3vw, 2rem);
            color: #AF524B;
        }

    }

    @media screen and (max-width: 768px) {

        .nav-title {

            width: 100%;
        }
    }

`

export const NavList = styled.ul`

    display: flex;
    /* margin-left: 4rem; */
    align-items: center;
    height: 100%;
    width: 50%;

    li {
        list-style: none;
        /* padding: 0rem 1.3rem; */
        margin-right: 1.3rem;
    }

    a {
        text-decoration: none;
        color: #AF524B;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavLink = styled(Link)`

    text-decoration: none;
    font-size: 0.91rem;

`

export const Icon = styled.div`

    position: relative;

    p {
        position: absolute;
        top: -50%;
        left: 60%;
        color: #AF524B;
        font-size: 0.82rem;
    }
    
    #cartIcon {
        font-size: 1.5rem;
        color: #AF524B;
    }

`

export const MobileNav = styled.ul`

    display: none;
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 30vh;
    z-index: 100000;
    top: 100%;
    left: 0;

    @media screen and (max-width: 768px) {

        display: none;

    }

`