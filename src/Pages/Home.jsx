import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Card from "../components/home/Card"
import LearningLanguageSection from 'components/home/LearningLanguageSection'
import Slider from "../components/home/Slider"
import Hero2 from 'components/home/Hero2'
import Stats from 'components/home/Stats'
import Products from 'components/home/Products'

const Home = () => {


  return (
    <div className='w-8/12 mx-auto py-24 '>

      <HeroSection />

      <Hero2 />

      <div className='w-[] pl-[-20rem] mx-auto'>
        <Stats />
      </div>
      <Products />

      <Slider />

    </div>

  )
}

export default Home