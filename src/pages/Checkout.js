import React, { useRef, useState, useEffect, ref } from 'react'
import { CheckoutContainer, CheckoutForm, CheckoutNav, Form,  FormFlex, FormGroup, CityFormGroup } from '../components/checkout/styledCheckout';
import { Link } from 'react-router-dom';
import { commerce } from '../lib/commerce';
import { useForm, FormProvider } from 'react-hook-form';
import Review from '../components/orderSummary/Review';
import Spinner from 'react-bootstrap/Spinner';

function Checkout({ cart, order, onCaptureCheckOut }) {

  const [ shippingCountries, setShippingCountries ] = useState([]);
  const [shippingCountry, setShippingCountry ] = useState('');
  const [ shippingSubdivisions, setShippingSubdivisions ] = useState([]);
  const [shippingSubdivision, setShippingSubdivision ] = useState('');
  const [shippingOptions, setShippingOptions ] = useState([]);
  const [shippingOption, setShippingOption ] = useState('');
  const [loading, setLoading] = useState(false)
  const [checkoutToken, setChekoutToken] = useState(null);

  const generateToken = async () => {


    if(cart.id === undefined) {

      setLoading(true)

    }else {

      setLoading(false)

        try{

            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
            
            setChekoutToken(token);


        }catch(error) {
    
          console.log(error)
    
        }
    }

    }


  useEffect (() => {

    generateToken()

  }, [cart]);

  const fetchShippingCountries = async() => {

    if(checkoutToken){

      try{

        const {countries } = await commerce.services.localeListShippingCountries(checkoutToken.id);
        
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0])

      }catch(error) {

        console.log(error);
        
      }

    }
    
  }

  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}))
  const options = shippingOptions.map((sO) => ({id: sO.id, label: sO.price.formatted_with_symbol}))
  

  const fetchSubdivisions = async () => {

      try {
          
        const { subdivisions } = await commerce.services.localeListSubdivisions(shippingCountry);

        setShippingSubdivisions( subdivisions )
        setShippingSubdivision(Object.keys(subdivisions)[0])

        console.log(subdivisions)

      }catch (error) {

        console.log(error)
      }

  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {

    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})

    setShippingOptions(options);
    setShippingOption(options[0].id);

  }

  useEffect(() => {

    fetchShippingCountries();

  }, [checkoutToken]);

  useEffect(() => {

   if(shippingCountry) fetchSubdivisions();

  }, [shippingCountry]);

  useEffect (() => {

    if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)

  }, [shippingSubdivision]);

  const { methods, register, handleSubmit } = useForm();
  const [ shippingData, setShippingData ] = useState({})
  const [openPage, setOpenPage ] = useState(false);

  const onSubmit = (data) => {
    
    setShippingData({...data, shippingSubdivision, shippingOption, shippingCountry })
    setOpenPage(true);
      
  };
  

  return (
    <CheckoutContainer>
      <CheckoutNav>
        <h1><Link to="/">LOAM BAKERY</Link></h1>
      </CheckoutNav>
      <div>
      {
        !openPage ?
        <CheckoutForm>
          <Form>            
            <div className="form-title">
              <h2>Shipping</h2>
            </div>
            <FormProvider >          
              <form onSubmit = {handleSubmit(onSubmit)}>
                <FormFlex>
                  <FormGroup>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" {...register('firstName')}required/>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" {...register('lastName')}required/>
                  </FormGroup>
                </FormFlex>

                <FormFlex>
                  <FormGroup>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address1" placeholder="Address" {...register('address1')} required/>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" {...register('email')} required/>
                  </FormGroup>  
                </FormFlex>

              <FormFlex>
                <FormGroup>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" placeholder="City" {...register('city')} required/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="zipCode">ZIP / Postal code</label>
                  <input type="text" name="zip" placeholder="ZIP / Postal code" {...register('zip')} required/>
                </FormGroup>
              </FormFlex>

                <FormFlex>
                  <FormGroup>
                    <label htmlFor="shippingSubdivision">Shipping Region</label>
                    <select name="shippingcountry" value={ shippingSubdivision } onChange={ (e) => setShippingSubdivision(e.target.value)}>
                      { loading ? 
                      <option>
                        Loading...
                      </option>
                      :
                      subdivisions.map((subdivision) => (
                          <option key={subdivision.id} value={subdivision.id}>
                            { subdivision.label }
                          </option>
                      ))}
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="shippingSubdivision">Shipping Fees</label>
                    <select value={ shippingOption} onChange={ (e) => setShippingOption(e.target.value)}>
                        {
                          options.map((option) => (
                            <option key={ option.id } value={option.id}>
                              { option.label }
                            </option>
                          ))
                        }
                    </select>
                  </FormGroup>
                  
                </FormFlex>

                <div className="submit-button">
                  <Link to="/cart"><button>Back</button></Link> 
                  <button type="submit">Next</button>
                </div>
              </form>
            </FormProvider>  
          </Form>
        </CheckoutForm>
        :
        <Review  checkoutToken={ checkoutToken} setOpenPage={ setOpenPage } order = { order } onCaptureCheckOut = {onCaptureCheckOut} shippingData={ shippingData }/>
      }
    </div>
    </CheckoutContainer>
  )
}

export default Checkout