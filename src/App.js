import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function App() {
   return (
    <React.StrictMode>
      <div className='App'>
        <Header />
        <Hero />
      </div>
    </React.StrictMode>
  );
}
