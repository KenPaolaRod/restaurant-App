import { useState } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom"

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
