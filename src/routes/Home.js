import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Home.css'
import Footer from '../components/footer/Footer';
import HeroHomeVideo from '../assets/background-app-hero.mp4'

const Home = () => {
  return (
    <div>
        <Navbar />

        <div className='hero'>
         <video autoPlay loop muted id='HeroHomeVideo'>
          <source src={HeroHomeVideo} type='video/mp4'/>
         </video>

        </div>
        <Footer />
    </div>
    
  )
}

export default Home