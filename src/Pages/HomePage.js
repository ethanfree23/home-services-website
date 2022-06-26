import React from 'react'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import WhatWeDo from '../Components/WhatWeDo.js'

function HomePage() {
    return (
        <div>
            <div className=" bg-hero-image bg-cover h-[800px] -mt-6" >
                <div className="border border-[#ffffff00]">
                    <div className="border border-black my-24 mx-44 p-12 pt-16" >
                        <h2 className="text-white font-extrabold text-6xl text-center">Tee's Home Services</h2>
                        <h6 className="text-white text-3xl text-center">Plumbing, Remodeling, & Electrical</h6>
                    </div>
                </div>
            </div>
            <div>
                <WhyChooseUse />
                <WhatWeDo />
            </div>
        </div>
    )
}

export default HomePage

