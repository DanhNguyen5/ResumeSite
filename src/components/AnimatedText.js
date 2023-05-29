import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  const phrases = ['Hard Worker.', 'Reliable.', 'Professional.'];

  const transition = useTransition(phrases[index], {
    key: phrases[index],
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 120, friction: 120, delay: 200 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      {transition((style, phrase) => (
        <animated.h1 className="text-customColorThree" style={{ ...style, fontSize: '2rem' }}>
          {phrase}
        </animated.h1>
      ))}
    </div>
  );
};

export default AnimatedText;
