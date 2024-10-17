import React from "react";
import "../styling/Home.css";
import Highlighter from "react-highlight-words";
import Fisherman from "../assets/Fisherman.gif";
import Waveman from "../assets/Waveman.gif";
import Goose from "../assets/Goose.gif";
import Underline from "../assets/Underline.png";
import Clock from "../assets/Clock.gif";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header noto-home items-left">
        <div className="waveman-container">
          <div>Hi,</div>
          <img className="waveman" src={Waveman} alt="Waveman" />
        </div>
        <div>I'm Sophie</div>
        <div> </div>
        <div>Yang.</div>
        <div className="icon-box">
          <img className="fisherman" src={Fisherman} alt="Fisherman" />
        </div>
      </div>
      <div className="home-desc ledger">
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
      </div>

      <div className="noto-home home-item">currently, I am</div>

      <div className="text-box ledger">
        <ul className="list">
          <li>seeking Winter 2025 software dev. opportunities!</li>
          <li>building <a href="">Chime</a></li>
          <li>learning how to leetcode. check out my profile: <a href="">link</a></li>
          <li>taking CS50's Introduction to Artificial Intelligence with Python by Brian Yu</li>
          <li>trying my hand at hardware ⚙️🛠️</li>
        </ul>
      </div>

      <div className="currently-container">
        <img className="clock" src={Clock} alt="Clock" />
        <div className="noto-home home-item">over the past bit, I have</div>
      </div>
      <div className="text-box ledger">
      <ul className="list">
      <li>developed an API assessor for 3500+ internal APIs using React and Golang, automated archiving of 14MM client consent forms saving $300,000, and implemented DevOps best practices in an Agile environment</li>
          <li>led a high-school expansion project, executing 4 successful campaigns, conducting focus groups to gather insights, and utilizing digital marketing strategies to achieve 2000+ in-person reach and 15000+ digital impressions</li>
          <li></li>
        </ul>
      </div>

      <div className="noto-home home-item">looking ahead, I'll</div>
      <div className="text-box ledger">
      <ul className="list">
      <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Home;
