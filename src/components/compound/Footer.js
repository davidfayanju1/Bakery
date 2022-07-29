import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FooterContainer, FooterFlexContainer, FirstItemContainer, FooterFlexItems, SecondItemContainer, FooterForm, FooterIcons, FooterFormElements } from './styledfooter';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <FooterContainer>
        <FooterFlexContainer>
            <FooterFlexItems>
                <FirstItemContainer>
                    <h2>LOAM BAKERY</h2>
                    <p>123 Demo St, New York NY. 12345.</p>
                    <p>Built by Bayo</p>
                </FirstItemContainer>
    
                <SecondItemContainer>
                    <ul>
                        <li><NavLink to={'/order'}>Order</NavLink></li>
                        <li><NavLink to={'/menu'}>Menu</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    </ul>

                    <FooterIcons>
                        <Link to={'instagram.com'}>
                            <BsInstagram />
                        </Link>
                        <Link to={'facebook.com'}>
                            <FaFacebookF />
                        </Link>
                        <Link to={'twitter.com'}>
                            <FaTwitter />
                        </Link>
                    </FooterIcons>
                </SecondItemContainer>
            </FooterFlexItems>

            {/* form */}

            <FooterForm>
                <div className="footer-form-title">
                    <p>Sign up with your email address to receive news and updates.</p>
                </div>

                <FooterFormElements>
                    <input type="email" name="email" placeholder='Email Address'/>
                    <button type="submit">Sign Up</button>
                </FooterFormElements>
            </FooterForm>
        </FooterFlexContainer>
    </FooterContainer>
  )
}

export default Footer