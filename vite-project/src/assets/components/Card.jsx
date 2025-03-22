import React from 'react'
import { BsArrowRight } from "react-icons/bs";


function Card({width, start, para, hover="bg-violet-600"}) {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl hover:${hover} min-h-[26rem] ${width}  flex flex-col justify-between`}>
     <div className='w-full '>
     <div className='w-full flex justify-between items-center '>
        <h3> Up Next: Culture</h3>
        <BsArrowRight/>
      </div>
      <h1 className='text-3xl font-medium mt-2 '>Whatever Heading </h1>
     </div>
     <div className='down w-full '>
        {
             start && (
                <>
              <h1 className='text-6xl font-bold tracking-tight leading-none '>Start a Project</h1>
              <button className='rounded-full mt-3 py-1 px-3 border-[1px] border-zinc-50 '>Contact Us</button>
                </>
             )
        }
      { para && (
          
          <p className='text-sm text-zinc-500 font-medium  '>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      ) }
     </div>
    </div>
  )
}

export default Card
