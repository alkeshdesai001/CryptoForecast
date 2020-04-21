import React from 'react';
import './About.scss';

const About = (props) => (
  <section className='about' id='about-section'>
    <div className='container'>
      <div className='about-content'>
        <h2 className='about-title'>About Veritas</h2>
        <p className='about-para'>
          Veritas means truth in latin, and we've picked this name because as
          investors we know that the real value relies in the aftermath of a
          constant flow of accurate data.
          <br />
          <br />
          We want to empower the teams building the cryptospace offering them an
          advanced tool to control and manage the relevant information about
          their projects.
        </p>
        <div className='about-cta'>
          <div className='about-circle'>
            <p className='about-arrow'>></p>
          </div>
          <h3 className='cta-title'>
            Sign up now for free
            <br />
            <span className='cta-subtitle'>
              and reach the ones that want to hear from you.
            </span>
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default About;
