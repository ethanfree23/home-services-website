import React from 'react'
import { useNavigate } from 'react-router-dom'

import Stats from '../Components/Stats'
import Testimonials from '../Components/Testimonials'
import Projects from '../Components/Projects'

function WorkPage() {
  let navigate = useNavigate();

  function goToTestimonials() {
    navigate('/Testimonials')
  }
  return (
    <>
      <Stats />
      <Testimonials />
      <Projects />
    </>
  )
}

export default WorkPage