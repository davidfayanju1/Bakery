import styled from "styled-components";

export const NavHeader = styled.header`
    background-color: white;
    width: 100%;
    height: 4.32rem;
    padding: 1rem 3rem;
    position: fixed;
    top: 0;
    display: flex; 
    align-items: center;
    /* backdrop-filter: blur(5px); */
    z-index: 1;


    @media screen and (max-width: 768px) {
        padding: 1rem 1.4rem;
    }
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
        font-size: 0.91rem;
    }

    /* .active {
        color: black;
    } */

    .active::after {
        content: '';
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: #AF524B;
    }




    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const Icon = styled.div`

    display: flex;
    align-items: center;


    .icon-container {
        position: relative;

         p {
            position: absolute;
            top: -37%;
            left: 85%;
            color: #AF524B;
            font-size: 0.77rem;
            font-weight: lighter;
        }
    }

   
    
    #cartIcon {
        font-size: 1.7rem;
        color: #AF524B;
    }

    .hamburger {

        display: none;
    }


    
    @media screen and (max-width: 768px) {

        .hamburger {
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            margin-left: 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
    
            .burger {
                display: block;
                height: 0.14rem;
                width: 100%;
                background-color: #AF524B;
                transition: all 0.3s ease-in-out;

            }

            

            .burger:nth-child(1) {
                margin-bottom: 0.4rem;
            }
            
        }

        .is-active {

        .burger:nth-child(1) {
            transform: translateY(4px) rotate(45deg);
        }

        .burger:nth-child(2) {
            transform: translateY(-6px) rotate(-45deg);
        }
        }



    }

`

export const MobileNav = styled.ul`

    display: none;
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100vh;
    z-index: 100000;
    top: 100%;
    left: 0;
    padding: 3rem 2rem;

    /* .active {
        color: black;
    } */

    .active::after {
        content: '';
        display: block;
        width: 35%;
        height: 0.3rem;
        background-color: #AF524B;
    }

    li {
        list-style: none;
        margin-bottom: 3rem;
    }

    a {
        font-size: 2.5rem;
        font-weight: lighter;
        text-decoration: none;
        color: #AF524B;
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 768px) {

        display: block;

    }

`