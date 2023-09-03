import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import Timeline from './components/Timeline/Timeline';

export default function App() {
   return (
    <React.StrictMode>
      <div className='App'>
        <Header />
        <Hero />
        <About />
        <Carousel />

      </div>
    </React.StrictMode>
  );
}
