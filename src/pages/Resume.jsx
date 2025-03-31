import React, { useContext } from 'react';
import '../styling/Resume.css';
import { ThemeContext } from '../components/util/ThemeContext';

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const lightTheme = theme === 'light';

  return (
    <div className="resume-container">
      <div className="resumeman-container">
        <img 
          src={lightTheme ? "/resumeman-white.png" : "/resumeman.png"} 
          alt="Resume Man" 
          className="resumeman"
        />
      </div>
      <iframe
        src="/resume.pdf"
        className="resume-pdf"
        title="Resume"
      />
      <a 
        href="/resume.pdf" 
        download 
        className="download-button hover-effect"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
