import React from 'react';
import AnimatedText from './AnimatedText';
// hero banner section
const About = () => {
  return (
    <div id="aboutme">
      {/*container class is not defined in Tailwind, mx-auto, margins are adjusted left and right to center itself in the parent */}
      {/* pt - means add 10 pixels of padding to the top, pb - means add 20 pixels of padding to bottm */}
      {/* items-center - items will be vertically centered */}
      {/* justify-center items will be horizontally centered */}
      <div className="container mx-auto flex sm:flex-row flex-col pt-10 pb-20  items-center justify-center bg-customColor" style={{ margin: '0 auto', maxWidth: '100%' }}>
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




