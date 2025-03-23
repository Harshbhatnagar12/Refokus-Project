import React from 'react'
import Product from './Product'
import { motion } from "motion/react"
import { useState } from 'react';
import arqitel from'./Video/arqitel.webm'
import ttr from'./Video/ttr.webm'
import Yahoo from'./Video/yahoo.webm'
import Yir from'./Video/yir.webm'


function Products() {

    var Products = [
        {
            titile:"Arqitel", description:"With a Continous 3D animation. We showcase Arqitel approach and show how migration data translates into real estate.", live:true, case:false 
        },
        {
            titile:"TTR", description:"With a Continous 3D animation. We showcase Arqitel approach and show how migration data translates into real estate.", live:true, case:false 
        },
        {
            titile:"YIR 2022", description:"With a Continous 3D animation. We showcase Arqitel approach and show how migration data translates into real estate.", live:true, case:true 
        },
        {
            titile:"Yahoo!", description:"With a Continous 3D animation. We showcase Arqitel approach and show how migration data translates into real estate.", live:true, case:true 
        },
       
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val*23);
    }

  return (
    <div className='mt-[8vw] relative'>
        {Products.map((val,index)=> ( <Product key={index} val={val} mover={mover} count={index}/>))}
        <div className='w-full h-full absolute top-0 pointer-events-none '>

       <motion.div 
       initial={{y:pos, x: "-50%"}} 
       animate={{y:pos+`rem`}} 
       transition={{ease:[0.76, 0, 0.24, 1], duration:.10}}
       className='window absolute w-96 h-[23rem]  left-[45%] overflow-hidden'
       >
       <motion.div 
        animate={{y: -pos+`rem`}} 
        transition={{ease:[0.76, 0, 0.24, 1], duration:.10}} 
        className='w-full h-full  '
        > {pos === 0 && (
            <video autoPlay muted loop>
                <source src={arqitel} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        )}</motion.div>

       <motion.div 
        animate={{y: -pos+`rem`}}  
        transition={{ease:[0.76, 0, 0.24, 1], duration:.10}} 
        className='w-full h-full  '
        >   <video autoPlay muted loop>
                            <source src={ttr} type="video/webm" />
                            Your browser does not support the video tag.
                        </video></motion.div>

       <motion.div
        animate={{y: -pos+`rem`}}  
        transition={{ease:[0.76, 0, 0.24, 1], duration:.10}}
         className='w-full h-full  '
         >  <video autoPlay muted loop>
         <source src={Yahoo} type="video/webm" />
         Your browser does not support the video tag.
     </video></motion.div>

       <motion.div 
       animate={{y: -pos+`rem`}} 
        transition={{ease:[0.76, 0, 0.24, 1], duration:.10}}
         className='w-full h-full '
         >  <video autoPlay muted loop>
         <source src={Yir} type="video/webm" />
         Your browser does not support the video tag.
     </video></motion.div>

       </motion.div>
        </div>
    </div>
  )
}

export default Products
