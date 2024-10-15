import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Footer from './components/Footer';




function App() {
  return (
    <div>
    <BrowserRouter id="root">
      <Navbar/>
      <Routing/>
      <Footer/>

      
    </BrowserRouter>
    </div>
  );
}

export default App;
