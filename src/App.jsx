import { About } from "./About/About"
import { Navbar } from "./Component/Navbar"
import { Home } from "./Home/Home"
import { Routes, Route } from 'react-router-dom'
import { Projects } from "./Projects/Projects"

import {Contact} from './Contact/Contact'
import { Footer } from "./Component/Footer"



function App() {


  return (
    <>
       <Navbar />
       
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/projects' element={<Projects />} />
      
       <Route path='/contact' element={<Contact />} />
     
       </Routes>
       <Footer />
    </>
  )
}

export default App
