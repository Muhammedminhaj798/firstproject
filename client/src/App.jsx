import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import Women from './pages/Women'
import Colloctions from './pages/Colloctions'
import Man from './pages/Man'
import Lookbook from './pages/Lookbook'
import Contact from './pages/Contact'
import Footer from './Navbar/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/register'element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/'element={<Home/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/collections'element={<Colloctions/>}/>
      <Route path='/man'element={<Man/>}/>
      <Route path='/lookbook'element={<Lookbook/>}/>
      <Route path='/contact'element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    
  )
}

export default App
