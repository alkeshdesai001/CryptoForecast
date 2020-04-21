import React from 'react';
import './Hero.scss';

const Hero = (props) => (
  <div className='container'>
    <section className='hero' id='hero-section'>
      <div className='hero-content'>
        <h3 className='hero-subtitle'>The Innovative Broadcast Platform</h3>
        <h1 className='hero-title'>
          The ultimate <br />
          enabler for the <br />
          crypto teams
        </h1>
        <p className='hero-para'>
          Ease the communication and the engagement with your
          <br />
          community within a secure and transparent platform.
        </p>
        <a href='#!' className='btn btn-primary btn-left'>
          Sign up now
        </a>
      </div>
      <div className='hero-img'>
        <img src={require('../../img/Globe.svg')} alt='Globe' />
      </div>
    </section>
  </div>
);

export default Hero;
