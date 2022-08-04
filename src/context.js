import React, { useState, useContext, createContext, useEffect } from 'react';
import { commerce } from './lib/commerce';

const bakeryContext = createContext();


export const useAuth = () => useContext(bakeryContext);



export const BakeryProvider = ({children}) => {

    const [loading, setLoading ] = useState(true);
    const [ products, setProducts ] = useState([])
    const [ cart, setCart ] = useState({});
    const [ cartLoader, setCartLoader ] = useState(false);
    const [ cartError, setCartError ] = useState('');
    const [cartNote, setCartNote ] = useState(false);
  

    const fetchProducts = async () => {

        try {

            setLoading(false);
            const { data }  = await commerce.products.list();          
            setProducts(data);
        
        }catch(error) {
    
          console.log(error);
        }    
    }

    const fetchCart = async () => {

        try{
    
          const cart = await commerce.cart.retrieve();
          
          setCart(cart)
            
          console.log(cart);
    
        }catch(error){
    
          console.log(error)
    
        }
    }

    const addToCart = async (productId, quantity) => {


        try {
    
          setCartLoader(true)
          const item = await commerce.cart.add(productId, quantity)
          
          setCart(item.cart);
    
        }catch(error) {
    
          setCartError(error)
    
        }finally {
          setCartLoader(false);
          setCartNote(true);
        }
    }


    useEffect(() => {

        fetchProducts();
        fetchCart();
    }, [])


const value = {

    fetchProducts,
    products,
    fetchCart,
    cart,
    addToCart, 
    cartError,
    cartLoader, 
    cartNote,
    setCartNote
}

    return (
        <bakeryContext.Provider value={ value }>
            {!loading && children}
        </bakeryContext.Provider>
    )
}