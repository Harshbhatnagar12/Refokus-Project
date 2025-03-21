import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url:"", number:48},
        {url:"", number:2},
        {url:"", number:11},
        {url:"", number:48},
        {url:"", number:2},
        {url:"", number:11}
    ]

  return (
    <div className='flex items-center mt-11 '>
      {data.map((elem,index)=>(
         <Stripe val={elem}/>
      ))}
    </div>
  )
}

export default Stripes
