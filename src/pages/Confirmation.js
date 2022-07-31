import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';



const Confirmation = ({ order, error }) => {
  return (
    <ConfirmationContainer>

    {

      order.customer ? (

        <Card>
          <h3>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</h3>
          <p>Order ref: {order.customer_reference}</p>
          <button><Link to="/">Back To Home</Link></button>
        </Card>

      )
      : (

        <Spinner animation="border" />

      )}
     
    <>
        {
          error ? <h3>Error: { error }</h3> : null
        }
    </>
    </ConfirmationContainer>
  )
}

export default Confirmation


const ConfirmationContainer = styled.section`

  background-color: rgb(243, 243, 243);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

`


const Card = styled.div`

    background-color: white;
    height: 15rem;
    max-width: 40rem;
    width: 94%;
    border-radius: 3px;
    padding: 4rem 1.7rem;


    h3::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.05rem;
      background-color: lightgrey;
      margin: 1rem 0rem;
    }

    p {
      font-weight: bold;
      color: grey;
    }

    button {
        border: none;
        outline: none;
        background-color: black;
        color: white;
        height: 2rem;
        width: 10rem;
        border-radius: 3px;


        a {
            text-decoration: none;
            color: white;
        }

        &:hover {
            background-color: #333333;
        }
    }

    @media screen and (max-width: 768px) {

        h3 {
          font-size: 1.2rem;
        }
    }

    
`