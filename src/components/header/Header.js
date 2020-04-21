import React from 'react';
import './Header.scss';

const Header = (props) => (
  <header className='main-header'>
    <div className='container'>
      <div className='logo-container'>
        <img src={require('../../img/Logo.svg')} alt='Logo' />
      </div>
    </div>
  </header>
);

export default Header;
