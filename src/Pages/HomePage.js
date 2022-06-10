import React from 'react'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import WhatWeDo from '../Components/WhatWeDo.js'
import HeroImg from '../img/HeroImg.png'

function HomePage() {
    return (
        <>
            <h2 className="text-3xl font-extrabold underline text-center tracking-widest">
                Hello world!
            </h2>
            <div>
                <img src={HeroImg} />
            </div>
            <WhyChooseUse />
            <WhatWeDo />
            <div>
                <h3>Our Serivces</h3>
                <div>Remodeling</div>
                <div>Electrical</div>
                <div>Plumbing</div>
            </div>
            <div>
                <h3>Contact us</h3>
                <div>info</div>
                <div>form</div>
            </div>
        </>
    )
}

export default HomePage