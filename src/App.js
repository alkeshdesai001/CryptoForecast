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
      <main>
        <Hero style={{ display: 'none' }} />
        <About style={{ display: 'none' }} />
        <Features style={{ display: 'none' }} />
        <Form style={{ display: 'none' }} />
        <CoinData style={{ display: 'none' }} />
        <Tabs style={{ display: 'none' }} />
        <Testimonials style={{ display: 'none' }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
