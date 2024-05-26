import React from 'react';
import Navbar from './components/menu/Navbar';
import Header from './components/header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Services/>
  </div>
);

export default App;
