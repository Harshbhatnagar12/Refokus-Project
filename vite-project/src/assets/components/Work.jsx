import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
function Work() {

      const [images, setImages] = useState( [
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"10%", left:"50%", isActive:false },
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
          top:"21%", left:"44%", isActive:false },
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"32%", left:"56%", isActive:false },
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:"30%", left:"51%", isActive:false },
        {url: "ttps://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"43%", left:"40%", isActive:false },
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:"44%", left:"45%", isActive:false },
      ])
    const {scrollYProgress } = useScroll();

   scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
      setImages(prev=>(
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ? (
            {...item, isActive:false}
          )
           :
          {...item, isActive:true}
        ))
      )) 
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0,1]);
          break;
        case 3:
          imagesShow([0,1,2]);
          break;
        case 4:
          imagesShow([0,1,2,3]);
          break;
        case 6:
          imagesShow([0,1,2,3,4]);
          break;
        case 7 :
          imagesShow([0,1,2,3,4,5]);
          break;
      }
    })

  return (
    <div className='w-full  '>
      <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>Work</h1>
      </div>
      <div className='absolute top-0 w-full h-full'>
        {images.map((elem,index)=>
        (elem.isActive && (<img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] translate-y-[50%]' src={elem.url} style={{top:elem.top, left:elem.left}} alt="" />))    
        )}
      </div>
    </div>
  )
}

export default Work;
<div >
</div>