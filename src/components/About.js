import React from 'react';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <div id="aboutme">
      <div className="container mx-auto flex pt-10 pb-20 sm:flex-row flex-col items-center justify-center bg-customColor" style={{ margin: '0 auto', maxWidth: '100%' }}>
        <div className="flex flex-wrap w-full sm:w-1/3 text-2xl">
          <AnimatedText />
        </div>
        <div className="flex flex-wrap w-full sm:w-1/4 text-customColorThree bg-customColorTwo rounded-lg pr-6 pl-6 py-4 mt-4 sm:mt-0">
          <p>
            Hello, I'm Dan Nguyen, a mechanical engineering graduate from the University of North Texas. My hobbies include game development, coding, and chess. I am looking forward to making a positive impact on any projects!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;




