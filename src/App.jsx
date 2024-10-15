import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Footer from './components/Footer';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


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
