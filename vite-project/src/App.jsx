import './App.css'
import Navbar from './assets/components/Navbar'
import Work from './assets/components/Work'
import Stripes from './assets/components/Stripes'
import Products from './assets/components/Products'
import Marquees from './assets/components/Marquees'
import Cards from './assets/components/Cards'
import Footer from './assets/components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
 

  return (
   <div className='w-full h-full bg-zinc-900 text-white font-["satoshi"]'>
    <Navbar/>
    <Work/>
    <Stripes/> 
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>
   </div>
  )
}

export default App
