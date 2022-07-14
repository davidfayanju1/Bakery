import React from 'react'
import bread from '../../images/bread.jpg'
import { JumbotronContainer } from './styledJumbotron'


function Jumbotron() {
  return (
        <JumbotronContainer>
            <img src={ bread } alt="big ass image" />
            <p>We believe our bread is only as good as the ingredients we use.</p>
        </JumbotronContainer>
    )
}

export default Jumbotron