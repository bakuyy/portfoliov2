import React from 'react';
import Typewriter from 'typewriter-effect';

const Projects = () => {
  return (
    <div className='flex justify-center items-center'>
    <Typewriter
    className='typewriter'
      onInit={(typewriter) => {
        typewriter.typeString('IDEAS')
        .pauseFor(1500)
        typewriter.typeString('·················')
        .pauseFor(1500)
        typewriter.typeString('REALITY')
        .start();
      }}
    />
    </div>
  );
}

export default Projects;
