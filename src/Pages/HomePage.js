import React from 'react'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import OurServices from '../Components/OurServices.js'

function HomePage() {
    return (
        <div>
            <div className=" bg-hero-image bg-cover h-[800px]" >
                <div className="border border-[#ffffff00]">
                    <div className="border border-[#003278] bg-[#f9f9f9d8] my-36 mx-44 p-12 pt-16 shadow-2xl" >
                        <h1 className="text-[#003278] font-extrabold text-8xl text-center drop-shadow-apple">Tee's Home Services</h1>
                        <p className="text-[#c0111f] text-5xl text-center mt-4 drop-shadow-sm">Plumbing, Remodeling, & Electrical</p>
                    </div>
                </div>
            </div>
            <div>
                <WhyChooseUse />
                <OurServices />
            </div>
        </div>
    )
}

export default HomePage

