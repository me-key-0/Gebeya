import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Leadingpage/Navbar"
import Slider from "./Components/Leadingpage/Slider"
import Cards from "./Components/Leadingpage/cards"
import Registration from './Components/Registration/Registration'
import Signup from './Components/Registration/Signup'
import Signin from './Components/Registration/Login'
import logo from './assets/logo geb.jpg'


const App = () => {
  return (
    <Router>
      <div className="bg-[white-green] min-h-screen" >
        < Navbar/>
        < Slider/>
        <Cards/>
        <Routes>
          <Route path='/signup' element={<Signup logo={logo}/>}/>
          <Route path='/signin' element={<Signin  logo={logo}/>} />
          <Route path='/Registration' element={<Registration/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


