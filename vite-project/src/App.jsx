import './App.css'
import Navbar from './assets/components/Navbar'
import Work from './assets/components/Work'
import Stripes from './assets/components/Stripes'
import Products from './assets/components/Products'
import Marquees from './assets/components/Marquees'

function App() {
 
 

  return (
   <div className='w-full h-full bg-zinc-900 text-white font-["satoshi"]'>
    <Navbar/>
    <Work/>
    <Stripes/> 
    <Products/>
    <Marquees/>
   </div>
  )
}

export default App
