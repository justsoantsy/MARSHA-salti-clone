import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Home.css'
import '../index.css'
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
         <div className='hero-text'>
            <h1 className="h1"> DRAGVERSE </h1>
            <h2 className="h2"> Drag Network </h2>
            <p> A social network built exclusively for drag creators and fans </p>
            <button className="btn" > Connect Wallet</button> 
         </div>
         <div className='bottom-text'>
            <h2> Next Video Build Winners</h2>
           </div>

        </div>
        <Footer />
    </div>
    
  )
}

export default Home