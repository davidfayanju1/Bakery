import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { DesktopNav, MobileNav, NavItems, NavList, NavLink, NavHeader, Icon } from './styledNav';


const Nav = () => {
  return (
    <NavHeader>
      <DesktopNav>
        <NavItems>
          <div className="nav-title">
              <h1><Link to={'/'} id="titleLink"> LOAM BAKERY</Link></h1>  
          </div> 

          <NavList>
            <li><NavLink to={'/order'}>ORDER</NavLink></li>
            <li><NavLink to={'/menu'}>MENU</NavLink></li>
            <li><NavLink to={'/about'}>ABOUT</NavLink></li>
            <li><NavLink to={'/blog'}>BLOG</NavLink></li>
          </NavList>
        </NavItems>
        <MobileNav>
            <li><NavLink to={'/order'}>ORDER</NavLink></li>
            <li><NavLink to={'/menu'}>MENU</NavLink></li>
            <li><NavLink to={'/about'}>ABOUT</NavLink></li>
            <li><NavLink to={'/blog'}>BLOG</NavLink></li>
        </MobileNav>
        
        <Icon>
          <p>2</p>
          <AiOutlineShoppingCart id='cartIcon' />
          <div className="hamburger">
            <span className="burger"></span>
            <span className="burger"></span>
          </div>
        </Icon>
      </DesktopNav>
    </NavHeader>
  )
}

export default Nav