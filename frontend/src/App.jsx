import React from 'react'
import Home from './Pages/Home'
import { Routes,Route, BrowserRouter} from 'react-router-dom'
import Branches from './Pages/Branches'
import Campus from './Pages/Campus'
import FacilitiesandSupport from './Pages/FacilitiesandSupport'
import Fests from './Pages/Fests'
import FAQs from './Pages/FAQs'
// import ScrollToTop from './Components/ScrolltoTop'

const App = () => {
  return (
    <>
    {/* <ScrollToTop /> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/campus-infra" element={<Campus />} />
        <Route path="/facilities-support" element={<FacilitiesandSupport />} />
        <Route path="/fests" element={<Fests />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
    </>
  )
}

export default App