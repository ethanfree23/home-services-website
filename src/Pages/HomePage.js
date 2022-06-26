import React from 'react'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import WhatWeDo from '../Components/WhatWeDo.js'

function HomePage() {
    return (
        <div>
            <div className="bg-hero-image bg-cover h-[800px] -mt-6" >
                <p className="text-white font-extrabold">hello world</p>
            </div>
            <WhyChooseUse />
            <WhatWeDo />
        </div>
    )
}

export default HomePage

