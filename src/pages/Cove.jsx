import React, { useContext } from 'react'
import '../styling/Cove.css'
import Typewriter from "typewriter-effect";
import { ThemeContext } from '../components/util/ThemeContext'

import Talkingman from "../assets/dark/Talkingman.gif";
import TalkingmanWhite from "../assets/light/TalkingmanWhite.gif";

const Cove = () => {
  const { theme } = useContext(ThemeContext);
  const lightTheme = theme === 'light';

  return (
    <div className='cove-container'>
        <img src={lightTheme ? TalkingmanWhite : Talkingman} alt='Cove' className='talkingman'/>
        <div className='talking-text'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("glad you decided to indulge your curiosity!")
              .pauseFor(1500)
              .start();
          }}
          options={{
            cursor: "",
            delay: 50,
          }}
        />
      </div>
    </div>
  )
}

export default Cove
