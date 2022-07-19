import React, { useState, useEffect } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { CartCard, CartContainer, ItemImage, QuantityFlex, Icon, ItemPrice, ItemContainer, CartTotalSection, CartTotal, ItemName } from '../components/cart/styledCart';
import { MdCancel } from 'react-icons/md';

const Cart = ({ cart }) => {

    const [loading, setLoading ] = useState(false);
    
  return (
    <CartContainer>

        <h2>Shopping Cart</h2>
        { 
        
        cart.line_items === undefined ? 'Loading...'
         
         :

         cart.line_items.map ((item) => (

            
            <CartCard key= { item.id }>
                
                <ItemImage>
                    <img src={ item.image.url } alt="cart item" />
                </ItemImage>

                <ItemName>
                    <p>{ item.name }</p>
                </ItemName>
                      
                <QuantityFlex>
                    
                        <button>
                            <BiMinus className='quantity-icon'/>
                        </button>

                        <p>{item.quantity}</p>
                        <button>
                            <BiPlus className='quantity-icon'/>                           
                        </button>
                     
                </QuantityFlex>

                <ItemPrice>
                    <p>{item.price.formatted_with_symbol }</p>
                </ItemPrice>
                    
                <div className="cancel-icon">
                    <Icon/>
                </div>
            </CartCard>
            

         ))   
        } 

        <CartTotalSection>
            {
                 cart.subtotal === undefined ? 'LOADING DATA...'
                 :
                 <CartTotal>
                    <div className="cart-total-flex">
                        <p>Subtotal</p>
                        <p>{ cart.subtotal.formatted_with_symbol }</p>
                    </div>

                    <button>Checkout</button>
                 </CartTotal>
            }
        </CartTotalSection>      
    </CartContainer>
  )
}

export default Cart