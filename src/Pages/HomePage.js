import React from 'react'

import HeroImg from '../img/HeroImg.png'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import WhatWeDo from '../Components/WhatWeDo.js'

function HomePage() {
    return (
        <>
            <img className="-my-6 w-[2200px] h-[765px]" src={HeroImg} />
            <WhyChooseUse />
            <WhatWeDo />
        </>
    )
}

export default HomePage

