import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Demo from './Pages/Demo'
import Pricing from './Pages/Pricing'
import Layout from './Layout'
import Trial from './Pages/Trial'
import AboutUs from './Pages/AboutUs'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

                <Route path="/" element={<Layout />} >
                <Route index element={<Home/>} />
                <Route path="Home" element={<Home />} />
                <Route path="Demo" element ={<Demo/>}/>
                <Route path="Pricing" element={<Pricing/>}/>
                <Route path="Trial" element={<Trial/>}/>
                <Route path="About Us" element={<AboutUs/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
