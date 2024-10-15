import React from 'react';
import '../styling/Home.css';
import Highlighter from "react-highlight-words";

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-header noto-home items-left">
          <div>Hi,</div>
          <div>I'm Sophie</div>
          <div> </div>
          <div>Yang</div>
          <div className='icon-box'></div>
        </div>
        <div className='home-desc ledger'>
            <Highlighter
                highlightClassName="highlight"
                searchWords={["systems design engineering", "University of Waterloo"]}
                autoEscape={true}
                textToHighlight="I’m a systems design engineering student at the University of Waterloo."
            />
        </div>

        
          <div className='noto-home home-item'>Currently,</div>
          <div className='text-box'>Test</div>

          <div className='noto-home home-item'>Currently,</div>
          <div className='text-box'>Test</div>

          <div className='noto-home home-item'>Currently,</div>
          <div className='text-box'>Test</div>
        </div>
      
  );
}

export default Home;
