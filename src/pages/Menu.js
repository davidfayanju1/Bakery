import React from 'react'
import { MenuContainer, ImageContainer, MenuFlexContainer, ItemCard, MenuFlexItems } from '../components/menu/styledmenu'
import menuImage1 from '../components/images/menuImage1.jpg'


const Menu = () => {

  const bites = [
    {name: 'Vegetable Quiche ', price: 4000.00, details: 'Tomato, Cheese, Basil'},
    {name: 'Granola & Yogurt ', price: 5000.00, details: 'Greek yogurt with fresh seasonal fruit'},
    {name: 'Soufflé Egg Sandwich', price: 6000.00, details: 'Bread of choice, egg, cheese, bacon'},
    {name: 'Salmon Tartine', price: 5000.00, details: 'Toasted ciabatta slice with salmon and eggs'},

  ]

  const pastries = [
    {name: 'Plain Croissant', price: 1500.00, details: 'Buttery, flaky, and fresh-baked '},
    {name: 'Pain au Chocolat ', price: 1450.00, details: 'Classic croissant with chocolate baked inside'},
    {name: 'Chocolate Brownie ', price: 2200.00, details: 'Chocolate chunks with powdered sugar'},
    {name: 'Cinnamon Roll', price: 3500.00, details: 'Freshly ground cinnamon with walnuts'},

  ]

  const tea = [
    {name: 'Drip coffee', price: 1600.00},
    {name: 'Latte', price: 2600.00},
    {name: 'Cappucino', price: 2400.00},
    {name: 'Americano', price: 1700.00},
    {name: 'Tea of choice', price: 1700.00},

  ]

  const drinks = [
    {name: 'Hot Chocolate', price: 4500.00},
    {name: 'Hot Apple Cider ', price: 3500.00},
    {name: 'Iced Tea', price: 1200.00},
    {name: 'Lemonade ', price: 1500.00},
    {name: 'Milk ', price: 2000.00},

  ]


  return (
    <MenuContainer>
      <ImageContainer>
        <img src={ menuImage1 } alt="background" />
      </ImageContainer>


      <MenuFlexContainer>
        
        <MenuFlexItems>
          <div className="right-item">
            <small>BITES</small>

            {
              bites.map((bite) => (

                <ItemCard>
                  <h3>{bite.name} - {`NGN${ bite.price }` }</h3>
                  <p>{bite.details}</p>
                </ItemCard>
              ))
            }
          </div>

          <div className="left-item">
            <small>PASTRIES</small>

            {
              pastries.map((bite) => (

                <ItemCard>
                  <h3>{bite.name} - {`NGN${ bite.price }` }</h3>
                  <p>{bite.details}</p>
                </ItemCard>
              ))
            }
          </div>
        </MenuFlexItems>


        <MenuFlexItems>
          <div className="right-item">
            <small>COFFEE + TEA</small>

            {
              tea.map((bite) => (

                <ItemCard>
                  <h3>{bite.name} - {`NGN${ bite.price }` }</h3>
                  <p>{bite.details}</p>
                </ItemCard>
              ))
            }
          </div>

          <div className="left-item">
            <small>DRINKS</small>

            {
              drinks.map((bite) => (

                <ItemCard>
                  <h3>{bite.name} - {`NGN${ bite.price }` }</h3>
                  <p>{bite.details}</p>
                </ItemCard>
              ))
            }
          </div>
        </MenuFlexItems>
      </MenuFlexContainer>
    </MenuContainer>
  )
}

export default Menu