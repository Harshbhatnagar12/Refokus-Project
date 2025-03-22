import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-lg py-10 flex gap-10 mx-auto'>
            <div className='basis-1/2 '>
            <h1 className='text-[10rem] font-semibold leading-none tracking-tight '>refocus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4  '>
            <div className='basis-1/3 '>
                <h4 className='mb-4 text-zinc-500 capitalize'>Socials</h4>
               { ["Instagram", "Twitter", "Facebook","LinkedIn"].map((item, index)=><a key={index} className='block mt-2 capitalize text-zinc-600 '>{item}</a>)}
            </div>
            <div className='basis-1/3 '>
                <h4 className='mb-4 text-zinc-500 capitalize'>Socials</h4>
               { ["Instagram", "Twitter", "Facebook","LinkedIn"].map((item, index)=><a key={index} className='block mt-2 capitalize text-zinc-600 '>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col item-end'>
                <p className='text-right '>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <img className='w-32 mt-7' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" />
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
