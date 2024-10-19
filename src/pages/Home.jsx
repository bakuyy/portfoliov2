import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";
import Highlighter from "react-highlight-words";


import Fisherman from "../assets/Fisherman.gif";
import Waveman from "../assets/Waveman.gif";
import Whitewaveman from "../assets/Whitewaveman.gif"
import Goose from "../assets/Goose.gif";
import Underline from "../assets/Underline.png";
import Clock from "../assets/Clock.gif";
import Eggman from "../assets/Eggman.gif";

import { motion } from "framer-motion"; 

const Home = () => {
  const navigate = useNavigate()
  const handleCoveClick=()=>{
    navigate('/cove')
  }


  return (
    <div className="home-container">
      <motion.div
        className="home-header noto-home items-left"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        <div className="waveman-container">
          <div>Hi,</div>
          <img className="waveman" src={Waveman} alt="Waveman" />
        </div>
        <div>I'm Sophie</div>
        <div> </div>
        <div>Yang.</div>
        <div className="icon-box">
          <button className="text-sm" onClick={handleCoveClick}>
            {/* <img src={Eggman} alt="Eggman" className="eggman"/> */}
            ?
          </button>
          <img className="fisherman" src={Fisherman} alt="Fisherman" />
        </div>
      </motion.div>
      
      <motion.div
        className="home-desc ledger"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        <img className="goose" src={Goose} alt="Goose" />
        <Highlighter
          highlightClassName="highlight"
          searchWords={[
            " systems design engineering ",
            " University of Waterloo.",
          ]}
          autoEscape={true}
          textToHighlight="I’m a systems design engineering student at the University of Waterloo. I'm a developer and a creative at heart."
        />
        <img className="underline" src={Underline} alt="Underline" />
      </motion.div>

      <motion.div
        className="noto-home home-item"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        currently, I am
      </motion.div>

      <motion.div
        className="text-box maven"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ul className="list">
          <li>seeking Winter 2025 software dev. opportunities!</li>
          <li>
            building <a target="_blank" href="https://github.com/bakuyy/chime">Chime</a>
          </li>
          <li>
            learning how to leetcode. check out my <a target="_blank" href="https://leetcode.com/u/bakuyy/">profile</a>
          </li>
          <li>
            taking CS50's Introduction to Artificial Intelligence with Python by
            Brian Yu
          </li>
          <li>trying my hand at hardware ⚙️🛠️</li>
        </ul>
      </motion.div>

      <motion.div
        className="currently-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <img className="clock" src={Clock} alt="Clock" />
        <div className="noto-home home-item">over the past bit, I have</div>
      </motion.div>

      <motion.div
        className="text-box maven"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <ul className="list">
          <li>
            developed an API assessor for 3500+ internal APIs using React and
            Golang, automated archiving of 14MM client consent forms saving
            $300,000, and implemented DevOps best practices in an Agile
            environment
          </li>
          <li>been to 16 hackathons and won 10 of them! check out my <a target="_blank" href="https://devpost.com/sophieyang12345"> devpost</a></li>
          <li>
            led a high-school expansion project, executing 4 successful
            campaigns, conducting focus groups to gather insights, and utilizing
            digital marketing strategies to achieve 2000+ in-person reach and
            15000+ digital impressions
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="noto-home home-item"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        looking ahead, I'd like to
      </motion.div>

      <motion.div
        className="text-box maven"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <ul className="list">
          <li>work at a startup. i want to wear different hats and make meaningful impact for a product that i believe in!</li>
          <li>mentor or judge at a hackathon</li>
          <li>keep advocating for gender equality in software :)</li>
        </ul>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Home;
