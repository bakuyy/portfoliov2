import React from 'react'
import Talkingman from "../assets/Talkingman.gif"
import '../styling/Cove.css'
import Typewriter from "typewriter-effect";

const Cove = () => {
  return (
    <div className='cove-container'>
        <img src={Talkingman} alt='Cove' className='talkingman'/>
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
