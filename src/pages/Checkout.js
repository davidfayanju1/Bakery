import React from 'react'
import { CheckoutContainer, CheckoutForm, CheckoutNav, Form,  FormFlex, FormGroup, CityFormGroup } from '../components/checkout/styledCheckout';
import { Link } from 'react-router-dom';




function Checkout({ setShow}) {

  setShow(false);

  return (
    <CheckoutContainer>

      <CheckoutNav>
        <h1><Link to="/">LOAM BAKERY</Link></h1>
      </CheckoutNav>

      <CheckoutForm>
        

        <Form>
            <div className="form-title">
              <h2>Shipping</h2>
            </div>


            <FormFlex>
              <FormGroup>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" placeholder="First Name"/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name"/>
              </FormGroup>
            </FormFlex>

            <FormFlex>
              <FormGroup>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Address"/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
              </FormGroup>  
            </FormFlex>

            <CityFormGroup>
              <label htmlFor="city">City</label>
              <input type="text" name="city" placeholder="City"/>
            </CityFormGroup>

            <FormFlex>
              <FormGroup>
                <label htmlFor="shippingCountry">Shipping Country</label>
                <select name="shippingcountry">

                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="shippingSubdivision">Shipping Subdivision</label>
                <select name="shippingSubdivision">
    
                </select>
              </FormGroup>
              
            </FormFlex>

            <FormFlex>
              <FormGroup>
                <label htmlFor="shippingOptions">Shipping Options</label>
                <select name="shippingOptions">

                </select>
              </FormGroup>
            </FormFlex>
            
        </Form>
      </CheckoutForm>

    </CheckoutContainer>
  )
}

export default Checkout