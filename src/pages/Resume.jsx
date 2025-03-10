import React from 'react';
import '../styling/Resume.css';
import { IoCloudDownloadOutline } from "react-icons/io5";
import Resumeman from "../assets/Resumeman.gif";
import { useNavigate } from 'react-router-dom';

const Resume = () => {

  const navigate = useNavigate()

  return (
    <div className="resume-container">
      <div className="resumeman-container">
        <img className="resumeman" src={Resumeman} alt="Resumeman" />
      </div>


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
