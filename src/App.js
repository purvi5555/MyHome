import './App.css';
import './index.css';
import './index.js';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import {Route,Routes } from "react-router-dom";

import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Sponser from './components/Sponser';
import SponserMenu from './components/SponserMenu';
import Volunteering from './components/Volunteering';

function App() {
  return (
   <div className='element'>
    <NavBar/>
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/donate" element={<Donate/>}/>
    <Route exact path="/sponser" element={<Sponser/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/moreSponser" element={<SponserMenu/>}/>
    <Route exact path="/volunteer" element={<Volunteering/>}/>
    </Routes>
    <Footer/>
   </div>


  );
}

export default App;
