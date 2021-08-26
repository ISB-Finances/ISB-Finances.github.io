import React ,{ Component } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import GoToTop from '../GoToTop';

function Home () {
    return (
        <>
          <HeroSection />  
          <Cards />
          <Footer />
          <GoToTop />
        </>
    );
}


export default Home;
