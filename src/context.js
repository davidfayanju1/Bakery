import React, { useState, useContext, createContext, useEffect } from 'react';
import { commerce } from './lib/commerce';

const bakeryContext = createContext();


export const useAuth = () => useContext(bakeryContext);



export const BakeryProvider = ({children}) => {

    const [loading, setLoading ] = useState(true);
    const [ products, setProducts ] = useState([])
    const fetchProducts = async () => {

        try {

            setLoading(false);
            const { data }  = await commerce.products.list();          
            setProducts(data);
        
        }catch(error) {
    
          console.log(error);
        }    
    }


    useEffect(() => {

        fetchProducts()

    }, [])


const value = {

    fetchProducts,
    products

}

    return (
        <bakeryContext.Provider value={ value }>
            {!loading && children}
        </bakeryContext.Provider>
    )
}