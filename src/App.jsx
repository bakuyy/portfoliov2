import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import Footer from './components/Footer';
import { pdfjs } from 'react-pdf';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { ThemeContext } from './components/util/ThemeContext';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function App() {
  const [loading, setLoading] = useState(false)
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${theme}-theme ${loading ? ' justify-center items-center' : ''}`}>
    {loading ? (
        <div className="text-center">
          <ClimbingBoxLoader
            color={theme === 'light' ? "black" : "white"}
            size={15}
            loading={loading}
          />
        </div>
      ) : (
    <BrowserRouter id="root">
      <Navbar/>
      <Routing/>
      <Footer/>
      
    </BrowserRouter>
      )}
    </div>
  )

}

export default App;
