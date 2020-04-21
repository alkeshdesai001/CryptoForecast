import React from 'react';
import './Footer.scss';

const Footer = (props) => (
  <footer className='footer' id='footer-section'>
    <div className='container'>
      <div className='footer-logo'>
        <img src={require('../../img/Footer Logo.svg')} alt='Logo' />
      </div>
      <div className='footer-text'>Veritas, data made reliable.</div>
      <div className='btn-container'>
        <a href='#!' className='btn btn-primary mt-5'>
          Sign up for free now and boost your reach
        </a>
      </div>
      <hr className='mt-5' />
      <div className='footer-links mt-4'>
        <ul className='nav-links'>
          <li className='link'>
            <a href='#!'>About</a>
          </li>
          <li className='link'>
            <a href='#!'>Blog</a>
          </li>
          <li className='link'>
            <a href='#!'>Terms & Conditions</a>
          </li>
          <li className='link'>
            <a href='#!'>Privacy Policy</a>
          </li>
          <li className='link'>
            <a href='#!'>contact</a>
          </li>
        </ul>
        <ul className='social-links'>
          <li className='fb'>
            <a href='#!'>
              <i className='fab fa-facebook-square footer-icons'></i>
            </a>
          </li>
          <li className='tweeter'>
            <a href='#!'>
              {' '}
              <i className='fab fa-twitter footer-icons'></i>
            </a>
          </li>
          <li className='telegram'>
            <a href='#!'>
              <i className='fab fa-telegram-plane footer-icons'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className='copyright'>
      Copyright © 2020 CryptoForecast - All Rights reserved
    </div>
  </footer>
);

export default Footer;
