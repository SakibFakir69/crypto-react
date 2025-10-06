
import React from 'react'
import About from './About'
import HeroSection from './HeroSection'
import WhatWeDo from './WhatWeDo'
import NumberBox from './NumberBox'
import InduestriesWeServe from './InduestriesWeServe'
import Faq from './Faq'
import Collabration from './Collabration'
import RoadMap from './RoadMap'
import BlockChain from './BlockChain'
import Community from './Community'

function Home() {
  return (
    <div>
        <HeroSection/>
        
     
        <WhatWeDo/>
        <NumberBox/>
        <InduestriesWeServe/>
        <Faq/>
        <Collabration/>
        <RoadMap/>
        <BlockChain/>
        <Community/>
        
      
    </div>
  )
}

export default Home
