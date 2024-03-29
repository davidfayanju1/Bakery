import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AllProducts from '../components/order/AllProducts';
import Bread from '../components/order/Bread';
import Pastries from '../components/order/Pastries';
import { Aside, OrderContainer, OrderContent } from '../components/order/styledOrder';

const Order = () => {
  
  let selected = {
    fontWeight: 'bolder'
  }
  
  return (
    <OrderContainer>
      <Aside>
        <ul>
          <li><NavLink to="/order" style={({isActive}) => isActive ? selected : null}>All</NavLink></li>
          <li><NavLink to="/order/pastries" style={({isActive}) => isActive ? selected : null}>Pastries</NavLink></li>
          <li><NavLink to="/order/breads" style={({isActive}) => isActive ? selected : null}>Breads</NavLink></li>
        </ul>
      </Aside>

      <OrderContent>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="pastries" element={<Pastries />} />
          <Route path="breads" element={<Bread />} />
        </Routes>
      </OrderContent>
    </OrderContainer>
  )
}

export default Order