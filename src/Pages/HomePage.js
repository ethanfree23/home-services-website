import React from 'react'

import HeroImg from '../img/HeroImg.png'

import WhyChooseUse from '../Components/WhyChooseUse.js'
import WhatWeDo from '../Components/WhatWeDo.js'
import Footer from '../Components/Footer.js'

function HomePage() {
    return (
        <>
            <img className="-my-6" src={HeroImg} />
            <WhyChooseUse />
            <WhatWeDo />
            <Footer />
        </>
    )
}

export default HomePage

