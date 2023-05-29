

import React from 'react';
import AnimatedText from './AnimatedText';




const About = () => {
  return (
    <div id="aboutme">
      <div className="container mx-auto flex items-center bg-customColor font-customTwo pt-20 pl-40" style={{ margin: '0 auto', maxWidth: '100%' }}>
        <div className="flex flex-wrap w-1/2">
          <img src="../../coding.svg" alt="hero" />
        </div>
        <div className="flex flex-wrap w-1/3 text-xl">
          <AnimatedText />
        </div>
      </div>
    </div>
  );
}




export default About;



