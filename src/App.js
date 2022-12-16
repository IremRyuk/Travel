import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Buy from './pages/Buy'
import Contact from './pages/Contact'
import Country from './pages/Country'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country' element={<Country />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buy/:Id' element={<Buy />} />
      </Routes>
    </div>
  )
}
