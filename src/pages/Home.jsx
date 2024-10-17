import React from 'react';
import '../styling/Home.css';
import Highlighter from "react-highlight-words";
import Fisherman from "../assets/Fisherman.gif";
import Waveman from "../assets/Waveman.gif";
import Goose from "../assets/Goose.gif";
import Underline from "../assets/Underline.png";
import Clock from "../assets/Clock.gif";

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-header noto-home items-left">
          <div className='waveman-container'>          
            <div>Hi,</div>
            <img className="waveman" src={Waveman} alt="Waveman" />
          </div>
          <div>I'm Sophie</div>
          <div> </div>
          <div>Yang.</div>
          <div className='icon-box'>
            <img className="fisherman" src={Fisherman} alt="Fisherman" />
          </div>
        </div>
        <div className='home-desc ledger'>
            <img className="goose" src={Goose} alt="Goose" />
            <Highlighter
                highlightClassName="highlight"
                searchWords={[" systems design engineering ", " University of Waterloo."]}
                autoEscape={true}
                textToHighlight="I’m a systems design engineering student at the University of Waterloo. I'm a developer and a creative at heart."
            />
            <img className="underline" src={Underline} alt="Underline" />
        </div>

          <div className='noto-home home-item'>currently,</div>

        <div className='text-box ledger'>
            <ol>
              <li>- blah</li>
              <li>- blha</li>
              <li>- blha</li>
              <li>- blha</li>
            </ol>
        </div>

        <div className='currently-container'>
        <img className="clock" src={Clock} alt="Clock" />
        <div className='noto-home home-item'>over the past bit,</div>

        </div>
        <div className='text-box ledger'>
          {/* Content can be added here */}
        </div>

        <div className='noto-home home-item'>looking ahead</div>
        <div className='text-box ledger'>
          {/* Content can be added here */}
        </div>
    </div>
  );
}

export default Home;
