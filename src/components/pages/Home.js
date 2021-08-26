import React ,{ Component } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import GoToTop from '../GoToTop';
import ABOUT US from './ABOUT US.png'; 

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

// image import
import ABOUT US from './ABOUT US.png';

 class App extends Component {
  render() {
    return (
     <div>
         //Call image in source like this
          <img src={ABOUTUS}/>
     </div>
    );
  }
}

export default Home;
