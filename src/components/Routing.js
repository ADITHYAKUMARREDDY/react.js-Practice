import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from './About.js';
import App from '../App';
import { Contact } from './Contact.js';
import { Slide } from './slide.js';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App />}/> 
        <Route path='/About' element={<About />}/> 
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/Slide' element={<Slide />}/>
         <Route path='/About' element={<About />}/> 
    </Routes>

  );
}

export default Routing