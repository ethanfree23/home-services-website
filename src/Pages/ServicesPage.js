import React from 'react'
import {useNavigate} from 'react-router-dom'
import WhatWeDo from '../Components/WhatWeDo'


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
    <WhatWeDo />
      {/* <div>
        <h3 className="justify">Services</h3>
        <button className="border mx-6"onClick={goToRemodeling}>Remodeling</button>
        <button className="border mx-6"onClick={goToElectrical}>Electrical</button>
        <button className="border mx-6"onClick={goToPlumming}>Plumbing</button>
      </div> */}
    </>
  )
}

export default ServicesPage