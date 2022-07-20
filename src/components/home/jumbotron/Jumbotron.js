import React from 'react'
import jumbotron from '../../images/jumbotron.jpg'
import { JumbotronContainer } from './styledJumbotron'


function Jumbotron() {
  return (
        <JumbotronContainer>
            <img src={ jumbotron } alt="big ass image" />
            <p>We believe our bread is only as good as the ingredients we use.</p>
        </JumbotronContainer>
    )
}

export default Jumbotron