import React from 'react'
import { ReviewContainer, ReviewCard, CardFlex, CardTotal, StripeButtons, Payment } from './styledReview'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const Review = ({ checkoutToken, setOpenPage }) => {

    const stripePromise = loadStripe('...');

  return (
    <ReviewContainer>
        <ReviewCard>
            <div className="card-title">
                <h1>Order Summary</h1>
            </div>

            <div>
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
            </div>
            
            <Payment>
                <CardTotal>
                    <p>Total</p>
                    <p>{checkoutToken.live.subtotal.formatted_with_symbol}</p>                
                </CardTotal>

                {/* stripe */}
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({elements, stripe}) => (

                            <form>
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