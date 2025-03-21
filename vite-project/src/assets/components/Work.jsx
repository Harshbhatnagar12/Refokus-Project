import React from 'react'

function Work() {

    var images = [
        {url: "", top:"50%", left:"50%", isActive:false },
        {url: "", top:"56%", left:"44%", isActive:false },
        {url: "", top:"45%", left:"56%", isActive:false },
        {url: "", top:"60%", left:"53%", isActive:false },
        {url: "", top:"43%", left:"40%", isActive:false },
        {url: "", top:"65%", left:"55%", isActive:false },
      ]

  return (
    <div className='w-full  '>
      <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>Work</h1>
      </div>
      <div className='absolute top-0 w-full h-full'>
        {images.map((elem,index)=>
        (elem.isActive && (<img className='absolute w-60 rounded-lg -translate-x-[50%] translate-y-[50%]' src={elem.url} style={{top:elem.top, left:elem.left}} alt="" />))    
        )}
      </div>
    </div>
  )
}

export default Work;
<div >
</div>