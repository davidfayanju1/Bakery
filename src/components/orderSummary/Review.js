import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewContainer, ReviewCard, CardFlex, CardTotal, StripeButtons, Payment } from './styledReview'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../../context';


const stripePromise = loadStripe('pk_test_51LP8YtGloqAAr7uq9SzmJDNLjP8oU4F9KJjtIERCxVefYwVQv3tYZzloP29YLAXvWJP4LwLeHSe0HpLUTQ0aA8ML00sX1L0xnW');

const Review = ({ checkoutToken, setOpenPage,  shippingData }) => {
    
    const { handleCaptureCheckout, order } = useAuth()

    const navigate = useNavigate();
    
    const submitForm = async (e, elements, stripe) => {

        e.preventDefault();

        if(!stripe || !elements) return;     
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement})
        
        
        if ( error ) {

            console.log(error);


        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email},
                shipping: { 
                    name: 'Primary', 
                    street: shippingData.address1, 
                    town_city: shippingData.city,
                    postal_zip_code: shippingData.zip,
                    county_state: shippingData.shippingSubdivision,
                    country: shippingData.shippingCountry
                },

                fulfillment : { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }

                
            }

            

            handleCaptureCheckout(checkoutToken.id, orderData);

            navigate('/confirmation');
        }
    }

  return (
    <ReviewContainer>
        <ReviewCard>
            <div className="card-title">
                <h1>Order Summary</h1>
            </div>

            <>
                {
                   checkoutToken.live.line_items.map((product) => (
                    <CardFlex key={product.id}>
                        <div className="card-name">
                            <img src={product.image.url} alt="bread picks" />
                            <p>{product.name}</p>
                        </div>

                        <div className="card-amount">
                            <p>{product.line_total.formatted_with_symbol}</p>
                            <p>{`Quantity: ${product.quantity}`}</p>
                        </div>
                    </CardFlex>

                   ))
                }
            </>
            
            <Payment>
                <CardTotal>
                    <p>Total</p>
                    <p>{checkoutToken.live.subtotal.formatted_with_symbol}</p>                
                </CardTotal>

                {/* stripe */}

                <h4>Payment method</h4>
                <br />
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({elements, stripe}) => (

                            <form onSubmit={(e) => submitForm(e, elements, stripe)}>
                                <CardElement />
                                <br /><br />
                                <StripeButtons>
                                    <button onClick={()=> setOpenPage(false)}>Back</button>
                                    <button type='submit' disabled={!stripe}>Pay</button>
                                </StripeButtons>
                            </form>

                        )
                        }
                    </ElementsConsumer>
                </Elements>
            </Payment>
        </ReviewCard>


    </ReviewContainer>
  )
}

export default Review