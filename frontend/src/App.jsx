import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Branches from './Pages/Branches'
import Campus from './Pages/Campus'
import FacilitiesandSupport from './Pages/FacilitiesandSupport'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/campus-infra" element={<Campus />} />
      <Route path="/facilities-support" element={<FacilitiesandSupport />} />
    </Routes>
  )
}

export default App