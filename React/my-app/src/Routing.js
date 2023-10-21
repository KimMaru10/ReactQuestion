import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js'
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default Routing;