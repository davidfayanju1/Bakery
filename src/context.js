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

  const [updateLoading, setUpdateLoading ] = useState(false);

  const updateCart = async (productId, quantity) => {

    
    try{

        setUpdateLoading(true);     
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart)
    }catch(error) {

      console.log(error)
    }finally {

        setUpdateLoading(false);
    }

  }

  const removeFromCart = async (productId) => {

    
    try {
      setUpdateLoading(true);     
      const { cart } = await commerce.cart.remove(productId)
      setCart(cart);

    }catch(error) {
      console.log(error)
    }finally {

      setUpdateLoading(false);
    }

  };

  const [order, setOrder] = useState({})
  const [ errorMssg, setErrorMssg ] = useState('');
   
  const refreshCart = async () => {

      const newCart = await commerce.cart.refresh();
      setCart(newCart);
  }

  
  
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {

      try {

        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
        setOrder(incomingOrder)
        refreshCart();

      }catch(error) {

        setErrorMssg(error.data.error.message)

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
    setCartNote,
    updateCart,
    updateLoading,
    removeFromCart,
    handleCaptureCheckout,
    errorMssg,
    order
}

    return (
        <bakeryContext.Provider value={ value }>
            {!loading && children}
        </bakeryContext.Provider>
    )
}