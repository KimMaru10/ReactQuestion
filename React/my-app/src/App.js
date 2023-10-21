import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Navbar';
import Routing from './Routing';
import axios from'axios';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
