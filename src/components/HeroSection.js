import React from 'react';
import '../App.css';
import './HeroSection.css';
import { DemoButton } from './DemoButton';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ISB</h1>
      <p>Investing, Saving, Budgeting</p>
      <h3>Planify your future with our beginner-friendly resources.</h3>
      <h4>At ISB, our goal is to help young adults build their financial knowledge by providing beginner-friendly resources on investing, saving, and budgeting.</h4>
      <div className='hero-btns'>
        <DemoButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH DEMO VIDEO <i className='far fa-play-circle' />
        </DemoButton>
      </div>
    </div>
  );
}

export default HeroSection;
