import React from 'react';
import './Tabs.scss';

const Tabs = (props) => (
  <div className='container'>
    <section className='tabs' id='tabs-section'>
      <div className='tabs-nav'>
        <ul className='tabs-nav-links'>
          <li className='tabs-nav-link tabs-active'>Coins Info</li>
          <li className='tabs-nav-link'>Overview</li>
          <li className='tabs-nav-link'>Exchange</li>
          <li className='tabs-nav-link'>Social</li>
          <li className='tabs-nav-link'>Developer</li>
        </ul>
      </div>
      <div className='coins-info-nav'>
        <ul className='info-links'>
          <li className='info-link info-active'>General Data</li>
          <li className='info-link'>Links</li>
          <li className='info-link'>Team Information</li>
          <li className='info-link'>Coin Data</li>
          <li className='info-link'>Supply</li>
          <li className='info-link'>Description</li>
        </ul>
      </div>
      <div className='coins-info-inputs'>
        <div className='input-left'>
          <div className='input-container'>
            <label for='name'>Name</label>
            <input type='text' name='name' value='Bitcoin' />
          </div>
          <div className='input-container'>
            <label for='creationDate'>Creation Date</label>
            <input type='text' name='creationDate' value='2009-01-03' />
          </div>
          <div className='input-container'>
            <label for='roadmap'>Roadmap</label>
            <input type='text' name='roadmap' value='N/A' />
          </div>
          <div className='input-container'>
            <label for='whitepaper'>Whitepaper</label>
            <input
              type='text'
              name='whitepaper'
              value='https://bitcoin.org/bitcoin.pdf'
              style={{ color: '#de943a' }}
            />
          </div>
        </div>
        <div className='input-right'>
          <div className='input-container'>
            <label for='ticker'>Ticker</label>
            <input type='text' name='ticker' value='BTC' />
          </div>
          <div className='input-container'>
            <label for='url'>URL</label>
            <input
              type='text'
              name='url'
              value='http://www.bitcoin.org'
              style={{ color: '#de943a' }}
            />
          </div>
          <div className='input-container'>
            <label for='headquarter'>Headquarter</label>
            <input type='text' name='headquarter' value='N/A' />
          </div>
          <div className='input-container'>
            <label for='language'>Language</label>
            <input type='text' name='language' value='English' />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Tabs;
