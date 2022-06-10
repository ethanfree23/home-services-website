import React from 'react'
import {useNavigate} from 'react-router-dom'


function ServicesPage() {
  let navigate = useNavigate();

  function goToRemodeling() {
    navigate('/Services-Remodeling')
  }
  function goToElectrical() {
    navigate('/Services-Electrical')
  }
  function goToPlumming() {
    navigate('/Services-Plumming')
  }

  return (
    <>
      <div>
        <h3>Services</h3>
        <h6 onClick={goToRemodeling}>Remodeling</h6>
        <h6 onClick={goToElectrical}>Electrical</h6>
        <h6 onClick={goToPlumming}>Plumbing</h6>
      </div>
    </>
  )
}

export default ServicesPage