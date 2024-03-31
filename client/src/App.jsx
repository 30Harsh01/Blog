import React from 'react'
import {BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Singup from './Pages/Singup'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Header from './components/Header'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Singup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    </BrowserRouter>
  )
}
