import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Features from './components/features/Features';
import Form from './components/form/Form';
import CoinData from './components/coinData/CoinData';
import Tabs from './components/tabs/Tabs';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Features />
      <Form />
      <CoinData />
      <Tabs />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
