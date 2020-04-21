import React from 'react';
import './Features.scss';

const Features = (props) => (
  <div className='container'>
    <section className='features' id='features-section'>
      <div className='feature-1-img'>
        <h2 className='feature-title'>
          Trusted <br />
          information
        </h2>
        <div className='hr-line'></div>
        <p className='feature-para'>
          Data is the new gold and we want to ensure that gold is pure.
          Therefore Veritas requires to be handled by the senior level members
          of the team to grant the highest reliability of the information shown.
        </p>
      </div>
      <div className='feature-2-img'>
        <h2 className='feature-title'>
          Markets never <br />
          sleep and so <br />
          the information
        </h2>
        <div className='hr-line'></div>
        <p className='feature-para'>
          With its admin Page, Veritas allows the token teams to update the
          relevant information about their token in real time and immediately
          broadcast the latest news with the audience following it.
        </p>
      </div>
      <div className='feature-3-img'>
        <h2 className='feature-title'>
          Targeted <br />
          audience
        </h2>
        <div className='hr-line'></div>
        <p className='feature-para'>
          Stand out from the background noise and be sure your message is read
          by the people eager to know it thanks to a tracking system that will
          offer the users to follow the coins they're into.
        </p>
      </div>
      <div className='feature-4-img'>
        <h2 className='feature-title'>
          Engagement <br />
          made simple
        </h2>
        <div className='hr-line'></div>
        <p className='feature-para'>
          Use the Veritas built-in board to create unique content or to relay
          your social network feed and get the word out to the ones eager to
          hear. Being in touch with your community has never been so
          straightforward.
        </p>
      </div>
      <div className='feature-5-img'>
        <h2 className='feature-title'>
          Track <br />
          record
        </h2>
        <div className='hr-line'></div>
        <p className='feature-para'>
          The timeline shows the history of your project as any edit or change
          that have been made throughout the life of your project. Storytelling
          helps in giving a soul to what you're building: strengthen the
          relationship with your community apprising them
        </p>
      </div>
    </section>
  </div>
);

export default Features;
