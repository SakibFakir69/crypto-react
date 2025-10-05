


import React from 'react'

function WhatWeDoCard({photo , title, description}) {
  return (
    <div  className='border p-2 d-flex flex-column gap-2 rounded bg-white'>

        <img   style={{height:"200px"}}  className='img-fluid object-fit-cover' src={photo ?? " "} alt={title ?? "not founed"} />


        <div>
            <p className='fs-5 fw-medium'>{title}</p>
            <span>{description}</span>
        </div>
      
    </div>
  )
}

export default WhatWeDoCard
