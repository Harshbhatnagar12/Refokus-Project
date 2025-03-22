import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
      {imagesurl.map((url,index)=><img key={index} src={url} className='w-28 flex-shrink-0'/>)}
      {imagesurl.map((url,index)=><img key={index} src={url} className='flex-shrink-0'/>)}
    </div>
  )
}

export default Marquee
