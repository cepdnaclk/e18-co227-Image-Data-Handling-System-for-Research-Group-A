import React from 'react'
// Routes instead of Switch
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'


export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" exact element={ <Home />} />
                <Route path="/Signup" element= { <Signup />} />
                <Route path="/Login" element= { <Login />} />
            </Routes>
        </Router>
    </div>
  )
}
