import React from "react";
import "../styling/Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const email = 's482yang@uwaterloo.ca'
  const handleEmailClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied!")
    })
  }

  return (
    <div className="footer-container noto-footer mt-8">
      <div>made with ♡ by sophie @ 2024</div>
      <div className="icons">
        <a
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sophie-yang-66b855216/"
          aria-label="LinkedIn Profile"
        >
          <CiLinkedin size={25} />
        </a>
        <a
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bakuyy"
          aria-label="GitHub Profile"
        >
          <FaGithub size={25} />
        </a>
        <button className="icon bg-transparent" onClick={handleEmailClick}>
          <IoIosMail size={25} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
