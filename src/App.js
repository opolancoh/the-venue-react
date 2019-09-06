import React from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className='App' style={{ height: '1000px', background: 'cornflowerblue' }}>
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      <Element name='venue_info'>
        <VenueInfo />
      </Element>
      <Element name='highlights'>
        <Highlight />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
