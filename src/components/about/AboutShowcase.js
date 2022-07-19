import React from 'react'
import { AboutContainer, AboutHero, FirstSection, AboutFlexContainer, SectionContainer, SecondFlexContainer } from './styledAboutShowcase'
import aboutPage from '../images/aboutPage.jpeg';
import aboutPage1 from '../images/aboutPage1.jpeg';
import slickImage3 from '../images/slickImage3.jpg';


function AboutShowcase() {
  return (
    <AboutContainer>
        <AboutHero>
            <img src={ slickImage3 } alt="fine bread" />
        </AboutHero>

        <SectionContainer>
            <AboutFlexContainer>
                <div className="story-texts">
                    <h1>Our Story</h1>
                    <p>Loam Bakery started in 2010 as two friends searching for the perfect balance of flour, water, and salt. Loam Bakery now sells a daily selection of breads and pastries both online and in-store.</p>
                    <p>We have a philosophy of balance—a balance of old techniques and new ones, of different ingredients and flavors, and of passion and skill.</p>
                </div>

                <div className="story-image">
                    <img src={ aboutPage } alt="about" />
                    <img src={ aboutPage1 } alt="about one" />
                </div>
            </AboutFlexContainer>
        </SectionContainer>

        <SectionContainer>
            <SecondFlexContainer>
                <div className="story-image">
                    <img src={ aboutPage1 } alt="about one" />
                </div>
                <div className="story">
                    <div className="story-texts">
                        <h1>Our ingredients</h1>
                        <p>We work with 14 local farmers to source all of the grains, fruit, and dairy that go into our breads and pastries. Our bread is human—from the farmers who mill and harvest our grains, to the bakers who put passion and care into each loaf they make.</p>
                    </div>
                </div>
            </SecondFlexContainer>
        </SectionContainer>
    </AboutContainer>
  )
}

export default AboutShowcase