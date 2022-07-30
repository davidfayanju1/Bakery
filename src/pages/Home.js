import React from 'react'
import ImageSlider from '../components/home/carousel/ImageSlider';
import Jumbotron from '../components/home/jumbotron/Jumbotron';
import Showcase from '../components/home/showcase/Showcase';
import Slick from '../components/home/slick/Slick';


const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Showcase />
      <Jumbotron />
      <Slick />
    </div>
  )
}

export default Home;