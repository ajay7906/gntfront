import { useState } from 'react'

import './App.css'
import Home from './Page/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Page/About'

import ContactUs from './Page/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
