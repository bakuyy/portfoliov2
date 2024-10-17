import React from 'react';
import '../styling/Resume.css';
import { IoCloudDownloadOutline } from "react-icons/io5";


const Resume = () => {
  return (
    <div className="resume-container">
      <iframe 
        className="resume-pdf" 
        src="https://drive.google.com/file/d/1CieNr5sNA2OJ_IQey6R163l-lBz77JJC/preview" 
        allow="autoplay" 
        title="Resume" 
      ></iframe>
      <a 
        href="https://drive.google.com/uc?export=download&id=1CieNr5sNA2OJ_IQey6R163l-lBz77JJC" 
        className="download-button"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <IoCloudDownloadOutline/>
        
      </a>
    </div>
  );
};

export default Resume;
