import React from 'react'
import Product from './Product'

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
       
    ]
  return (
    <div className='mt-[8vw]'>
        {Products.map((val,index)=>  <Product key={index} val={val}/>)}
       
    </div>
  )
}

export default Products
