import React from 'react'

import WhatWeDo from '../Components/WhatWeDo.js'
import HeroImg from '../img/HeroImg.png'

function HomePage() {
    return (
        <>
            <h2 className="text-3xl font-bold underline container-lg">
                Hello world!
            </h2>
            <div>
                <img src={HeroImg} />
            </div>
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