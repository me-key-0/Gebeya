import React from 'react';
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import Cards from "./Components/cards"

const App = () => {
  return (
    <div className="bg-[white-green] min-h-screen" >
      < Navbar/>
      < Slider/>
      <Cards/>
    </div>
  )
}

export default App
