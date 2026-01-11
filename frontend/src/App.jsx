import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Branches from './Pages/Branches'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches" element={<Branches />} />
    </Routes>
  )
}

export default App