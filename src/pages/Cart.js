import React, { useState, useEffect } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { CartCard, CartContainer, ItemImage, QuantityFlex, Icon, ItemPrice, ItemContainer, CartTotalSection, CartTotal, ItemName, EmptyCart } from '../components/cart/styledCart';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { commerce } from '../lib/commerce';

const Cart = ({ cart, removeFromCart, updateCart }) => {

    const [loading, setLoading ] = useState(false);
    

    
  return (
    <CartContainer>

        <h2>Shopping Cart</h2>
        {cart.line_items && cart.line_items.length === 0 ? 
        
        <EmptyCart>
            <p>You have nothing in your shopping cart</p>
            <button><Link to="/order">Continue Shopping</Link></button>
        </EmptyCart>
        
        
        : null }

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
                    
                        <button onClick={() => { updateCart(item.id, item.quantity - 1)}}>
                            <BiMinus className='quantity-icon'/>
                        </button>

                        <p>{item.quantity}</p>

                        <button onClick={() => { updateCart(item.id, item.quantity + 1)}}>
                            <BiPlus className='quantity-icon'/>                           
                        </button>
                     
                </QuantityFlex>

                <ItemPrice>
                    <p>{item.line_total.formatted_with_symbol }</p>
                </ItemPrice>
                    
                <div className="cancel-icon">
                    <Icon onClick={ () => { removeFromCart(item.id )}}/>
                </div>
            </CartCard>
            

         ))   
        } 

        <CartTotalSection>
            {
                cart.subtotal && cart.line_items.length > 0 ?

                 <CartTotal>
                    <div className="cart-total-flex">
                        <p>Subtotal</p>
                        <p>{ cart.subtotal.formatted_with_symbol }</p>
                    </div>

                    <Link to= '/checkout'><button>Checkout</button></Link>
                 </CartTotal>
                 : null
            }
        </CartTotalSection>      
    </CartContainer>
  )
}

export default Cart