import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { DesktopNav, MobileNav, NavItems, NavList, NavHeader, Icon } from './styledNav';
import { useAuth } from '../../context';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const { cart } = useAuth();
  const cartItems = cart.total_items; 
  

  return (
    <NavHeader>
      <DesktopNav>
        <NavItems>
          <div className="nav-title">
              <h1><Link to={'/'} id="titleLink"> LOAM BAKERY</Link></h1>  
          </div> 

          <NavList>
            <li><NavLink to={'/order'} className ={({isActive}) => isActive ? 'active' : null}>ORDER</NavLink></li>
            <li><NavLink to={'/menu'}>MENU</NavLink></li>
            <li><NavLink to={'/about'}>ABOUT</NavLink></li>
          </NavList>
        </NavItems>

        <>
        { showNav ? 
      
        <MobileNav>
            <li><NavLink to={'/order'} className ={({isActive}) => isActive ? 'active' : null} onClick={() => setShowNav(false)}>ORDER</NavLink></li>
            <li><NavLink to={'/menu'} onClick={() => setShowNav(false)}>MENU</NavLink></li>
            <li><NavLink to={'/about'} onClick={() => setShowNav(false)}>ABOUT</NavLink></li>
        </MobileNav>
      
        : null}
        </>
        
        <Icon>
          <div className="icon-container">
            <p>{ cartItems === undefined ? '...' : cartItems }</p>
            <Link to="/cart"><AiOutlineShoppingCart id='cartIcon' /></Link>
          </div>
          <div className={`hamburger ${showNav ? 'is-active' : null}`} onClick={() => setShowNav(!showNav)}>
            <span className='burger'></span>
            <span className='burger'></span>
          </div>
        </Icon>
      </DesktopNav>
    </NavHeader>
  )
}

export default Nav