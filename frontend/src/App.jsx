import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Branches from './Pages/Branches'
import Campus from './Pages/Campus'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/campus-infra" element={<Campus />} />
    </Routes>
  )
}

export default App