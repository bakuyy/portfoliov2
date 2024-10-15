import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div>
    <BrowserRouter id="root">
      <Navbar/>
      <Routes>

      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
