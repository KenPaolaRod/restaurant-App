import { useState } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom"

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Home from './components/Home'
import BookPage from './components/BookPage'
import MenuPage from './components/MenuPage'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/BookPage' element={<BookPage />} />
      <Route path='/MenuPage' element={<MenuPage />} />
    </Routes>
    </>
  )
}

export default App
