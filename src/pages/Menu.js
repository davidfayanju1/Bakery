import React from 'react'
import { MenuContainer, ImageContainer, MenuFlexContainer, ItemCard, MenuFlexItems } from '../components/menu/styledmenu'
import menuImage1 from '../components/images/menuImage1.jpg'


const Menu = () => {

  const bites = [
    {name: 'Vegetable Quiche ', price: 8, details: 'Tomato, Cheese, Basil'},
    {name: 'Granola & Yogurt ', price: 10, details: 'Greek yogurt with fresh seasonal fruit'},
    {name: 'Soufflé Egg Sandwich', price: 14, details: 'Bread of choice, egg, cheese, bacon'},
    {name: 'Salmon Tartine', price: 21, details: 'Toasted ciabatta slice with salmon and eggs'},

  ]

  const pastries = [
    {name: 'Plain Croissant', price: 1.75, details: 'Buttery, flaky, and fresh-baked '},
    {name: 'Pain au Chocolat ', price: 2, details: 'Classic croissant with chocolate baked inside'},
    {name: 'Chocolate Brownie ', price: 3, details: 'Chocolate chunks with powdered sugar'},
    {name: 'Cinnamon Roll', price: 5, details: 'Freshly ground cinnamon with walnuts'},

  ]

  const tea = [
    {name: 'Drip coffee', price: 2.40},
    {name: 'Latte', price: 3.70},
    {name: 'Cappucino', price: 3.40},
    {name: 'Americano', price: 2.40},
    {name: 'Tea of choice', price: 2.40},

  ]

  const drinks = [
    {name: 'Hot Chocolate', price: 4.20},
    {name: 'Hot Apple Cider ', price: 3.20},
    {name: 'Iced Tea', price: 3.20},
    {name: 'Lemonade ', price: 3.20},
    {name: 'Milk ', price: 2.20},

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
                  <h3>{bite.name} - {`$${ bite.price }` }</h3>
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
                  <h3>{bite.name} - {`$${ bite.price }` }</h3>
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
                  <h3>{bite.name} - {`$${ bite.price }` }</h3>
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
                  <h3>{bite.name} - {`$${ bite.price }` }</h3>
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