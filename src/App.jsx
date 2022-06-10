import './Styles/App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar.js'
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ServicesPage from './Pages/ServicesPage.js'
import WorkPage from './Pages/WorkPage.js'
import Testimonials from './Pages/Testimonials.js'
import ContactPage from './Pages/ContactPage.js'
import Remodeling from './Pages/RemodelingServicesPage.js'
import Electrical from './Pages/ElectricalServicesPage.js'
import Plumbing from './Pages/PlumbingServicesPage.js'

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/Home" element={<HomePage />} />

        <Route path="/AboutUs" element={<AboutPage />} />

        <Route path='/Services' element={<ServicesPage />} />

        <Route path="/OurWork" element={<WorkPage />} />

        <Route path="/Testimonials" element={<Testimonials />} />

        <Route path="/ContactUs" element={<ContactPage />} />

        <Route path="/Services-Remodeling" element={<Remodeling />} />

        <Route path="/Services-Electrical" element={<Electrical />} />

        <Route path="/Services-Remodeling" element={<Plumbing />} />

      </Routes>
    </>
  );
}

export default App;