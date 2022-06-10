import React from 'react'
import { useNavigate } from 'react-router-dom'

function WorkPage() {
  let navigate = useNavigate();

  function goToTestimonials() {
    navigate('/Testimonials')
  }
  return (
    <>
      <div>Our Work</div>
      <div>
        <div>img 1</div>
        <div>img 2</div>
        <div>img 3</div>
        <div>img 4</div>
        <div>img 5</div>
      </div>
      <button onClick={goToTestimonials}>Testimonials</button>
    </>
  )
}

export default WorkPage