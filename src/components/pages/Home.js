import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import GoToTop from '../GoToTop';
import AboutUs from './ABOUT US.png'; 

function Home () {
    return (
        <>
          <HeroSection />  
          <Cards />
          <img src='images/ABOUT US.png'></img> 
          <Footer />
          <GoToTop />
        </>
    );
}

export default Home;
