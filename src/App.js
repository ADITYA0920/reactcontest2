import React from 'react'
import Signup from './Componenet/Signup'
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from './Componenet/Profile';
console.log("app is working")
const App = () => {
  return (
    <div>
      <Router>
            <Routes>
              
              <Route path="/" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
    </Router>
        {/* <Profile/> */}
    </div>
  )
}

export default App