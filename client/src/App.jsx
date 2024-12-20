import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './pages/Home'
import Navbar from './Navbar/Navbar'
import Women from './pages/Women'
import Colloctions from './pages/Colloctions'
import Man from './pages/Man'
import Contact from './pages/Contact'
import Footer from './Navbar/Footer'
import Kids from './pages/Kids'
import Cart from './pages/Cart'
import ProdectDetails from './pages/ProdectDetails'
import Context from './pages/Context'

function App() {
  return (
    <Context>
      <Navbar/>
      <Routes>
      <Route path='/register'element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/'element={<Home/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/collections'element={<Colloctions/>}/>
      <Route path='/man'element={<Man/>}/>
      <Route path='/kids'element={<Kids/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/man/productdetails/:id'element={<ProdectDetails/>}/>
      <Route path='/kids/productdetails/:id'element={<ProdectDetails/>}/>
      <Route path='/women/productdetails/:id'element={<ProdectDetails/>}/>
      <Route path='/collections/productdetails/:id'element={<ProdectDetails/>}/>

    </Routes>
    <Footer/>
    </Context>
    
  )
}

export default App
