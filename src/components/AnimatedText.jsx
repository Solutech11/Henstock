import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here (milliseconds)

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    setDisplayText(text.substring(0, index));
  }, [index, text]);

  return <h1 className="text-48 leading-58 font-bold text-white sm:text-5xl sm:leading-none">{displayText}</h1>;
};

export default AnimatedText;
