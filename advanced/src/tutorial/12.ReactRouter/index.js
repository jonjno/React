import React from 'react'
import Home from './Home'
import About from './About'
import People from './People';
import Error from './Error';
import Person from './Person';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Index = () => {
  return <div>
   <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  </div>
   
  
}

export default Index
